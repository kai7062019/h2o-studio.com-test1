import { Router } from 'itty-router';

// Create a new router
const router = Router();

// Types
interface FormSubmission {
  type: 'creator' | 'brand';
  name: string;
  email: string;
  message: string;
}

interface Env {
  DB: D1Database;
  SENDGRID_API_KEY?: string;
  RESEND_API_KEY?: string;
  ADMIN_EMAIL: string;
}

// Initialize database
async function initializeDatabase(env: Env) {
  try {
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        status TEXT DEFAULT 'pending'
      )
    `).run();
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}

// Send email using SendGrid or Resend
async function sendEmail(
  to: string,
  subject: string,
  html: string,
  env: Env
): Promise<boolean> {
  try {
    // Try SendGrid first
    if (env.SENDGRID_API_KEY) {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: to }],
              subject: subject,
            },
          ],
          from: {
            email: 'noreply@h2ostudio.com',
            name: 'H2O Studio',
          },
          content: [
            {
              type: 'text/html',
              value: html,
            },
          ],
        }),
      });

      return response.ok;
    }

    // Try Resend as fallback
    if (env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@h2ostudio.com',
          to: to,
          subject: subject,
          html: html,
        }),
      });

      return response.ok;
    }

    console.warn('No email service configured');
    return false;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

// Handle form submission
router.post('/api/submit-form', async (request: Request, env: Env) => {
  try {
    // Initialize database
    await initializeDatabase(env);

    const body = await request.json() as FormSubmission;

    // Validate input
    if (!body.type || !body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Insert into database
    const result = await env.DB.prepare(
      'INSERT INTO form_submissions (type, name, email, message) VALUES (?, ?, ?, ?)'
    ).bind(body.type, body.name, body.email, body.message).run();

    // Send confirmation email to user
    const userEmailHtml = `
      <h2>Thank you for your interest in H2O Studio!</h2>
      <p>Hi ${body.name},</p>
      <p>We've received your application to join H2O Studio as a ${body.type}.</p>
      <p>Our team will review your submission and get back to you within 3-5 business days.</p>
      <p>Best regards,<br/>H2O Studio Team</p>
    `;

    await sendEmail(body.email, 'Application Received - H2O Studio', userEmailHtml, env);

    // Send notification email to admin
    const adminEmailHtml = `
      <h2>New Form Submission</h2>
      <p><strong>Type:</strong> ${body.type}</p>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message.replace(/\n/g, '<br>')}</p>
      <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
    `;

    await sendEmail(env.ADMIN_EMAIL, `New ${body.type} Application - H2O Studio`, adminEmailHtml, env);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
        id: result.meta.last_row_id,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit form' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});

// Get form submissions (admin only)
router.get('/api/submissions', async (request: Request, env: Env) => {
  try {
    // Check authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await env.DB.prepare(
      'SELECT * FROM form_submissions ORDER BY created_at DESC'
    ).all();

    return new Response(
      JSON.stringify({ submissions: result.results }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Get submissions error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to get submissions' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});

// Health check
router.get('/api/health', () => {
  return new Response(JSON.stringify({ status: 'ok' }), {
    headers: { 'Content-Type': 'application/json' },
  });
});

// Serve static files from dist folder
router.all('*', async (request: Request, env: Env) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Try to get the file from the assets
  const response = await env.ASSETS.fetch(request);

  // If not found and it's not an API route, serve index.html (SPA routing)
  if (response.status === 404 && !pathname.startsWith('/api/')) {
    return env.ASSETS.fetch(new Request(new URL('/index.html', url).toString(), request));
  }

  return response;
});

// Export the router
export default {
  fetch: router.handle,
};
