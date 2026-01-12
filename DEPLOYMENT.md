# H2O Studio MCN Website - Deployment Guide

## Project Structure

```
.
├── client/                 # Frontend (React + Vite)
│   ├── public/            # Static assets
│   ├── src/               # React components and pages
│   └── index.html         # Entry point
├── dist/                  # Build output (Cloudflare Pages)
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── wrangler.toml          # Cloudflare Pages configuration
└── tsconfig.json          # TypeScript configuration
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Cloudflare Pages Deployment

### Option 1: Direct Upload (Recommended)

1. Build the project locally:
   ```bash
   npm install
   npm run build
   ```

2. Upload the `dist` folder to Cloudflare Pages:
   - Go to Cloudflare Dashboard → Pages
   - Create a new project
   - Upload the `dist` folder directly

### Option 2: Git Integration

1. Push your repository to GitHub/GitLab
2. Connect your repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy

## Email Configuration

The Join Us form currently logs submissions to console. To enable email notifications:

1. Integrate with a service like:
   - SendGrid
   - Mailgun
   - AWS SES
   - Formspree

2. Update `client/src/pages/JoinUs.tsx` with your email service API

## Environment Variables

No environment variables required for static deployment.

For email integration, add to your email service:
- `ADMIN_EMAIL`: Email address to receive submissions
- `SENDER_EMAIL`: Email address to send from

## Features

- ✅ Multi-language support (English, Spanish, Chinese)
- ✅ Responsive design
- ✅ Join Us form (Creator & Brand)
- ✅ Services showcase with 6 detailed service pages
- ✅ About page
- ✅ Privacy Policy & Terms of Service
- ✅ Parallax scrolling effects
- ✅ Smooth animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized for Cloudflare Pages CDN
- Minified CSS and JavaScript
- Lazy loading for images
- No external API calls required for static content

## Support

For issues or questions, contact: admin@h2o-studio.com
