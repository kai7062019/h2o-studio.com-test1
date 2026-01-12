# H2O Studio WordPress Export

This folder contains WordPress-compatible files for the H2O Studio website. You can use these files to deploy the website on WordPress or integrate them into your existing WordPress installation.

## Files Included

1. **h2o-studio-wordpress.html** - Complete HTML structure of the website
2. **h2o-studio-style.css** - Complete CSS styling
3. **h2o-studio-template.php** - WordPress theme template with custom post types and functions
4. **h2o-studio-script.js** - JavaScript for interactive features (to be created)
5. **README.md** - This file

## Installation Methods

### Method 1: Create a Custom WordPress Theme

1. **Create Theme Folder**
   ```bash
   mkdir -p wp-content/themes/h2o-studio
   ```

2. **Copy Files**
   - Copy `h2o-studio-template.php` to `wp-content/themes/h2o-studio/functions.php`
   - Copy `h2o-studio-style.css` to `wp-content/themes/h2o-studio/style.css`
   - Copy `h2o-studio-wordpress.html` content to `wp-content/themes/h2o-studio/index.php`

3. **Create style.css Header**
   Add this to the top of `style.css`:
   ```css
   /*
   Theme Name: H2O Studio
   Theme URI: https://h2ostudio.com
   Description: Premium creative agency theme for H2O Studio
   Version: 1.0
   Author: H2O Studio
   Author URI: https://h2ostudio.com
   License: GPL v2 or later
   License URI: https://www.gnu.org/licenses/gpl-2.0.html
   Text Domain: h2o-studio
   Domain Path: /languages
   */
   ```

4. **Activate Theme**
   - Go to WordPress Admin Dashboard
   - Navigate to Appearance → Themes
   - Find "H2O Studio" and click "Activate"

### Method 2: Use as Page Templates

1. **Create Custom Page Templates**
   - Create a new page for each section (Home, About, Services, Join Us, Privacy, Terms)
   - Use the HTML from `h2o-studio-wordpress.html` as content
   - Apply the CSS from `h2o-studio-style.css` via custom CSS plugin

2. **Install Custom CSS Plugin**
   - Install "Simple Custom CSS and JS" plugin
   - Add the CSS from `h2o-studio-style.css` to the custom CSS section

### Method 3: Use Page Builders

1. **With Elementor**
   - Import the HTML structure into Elementor
   - Use the CSS for styling
   - Customize as needed

2. **With WPBakery**
   - Create pages using WPBakery elements
   - Apply the CSS styling
   - Map content to your pages

## WordPress Post Types

The template includes custom post types for:

- **Services** - Manage your 6 services
- **Team Members** - Showcase your team
- **Case Studies** - Display success stories

### Creating Services

1. Go to Services in the WordPress menu
2. Click "Add New"
3. Fill in:
   - Title: Service name
   - Description: Service details
   - Featured Image: Service image
4. Publish

### Creating Team Members

1. Go to Team Members in the WordPress menu
2. Click "Add New"
3. Fill in:
   - Title: Team member name
   - Description: Bio/role
   - Featured Image: Profile photo
4. Publish

### Creating Case Studies

1. Go to Case Studies in the WordPress menu
2. Click "Add New"
3. Fill in:
   - Title: Case study title
   - Description: Results and details
   - Featured Image: Case study image
4. Publish

## Theme Customization

### Theme Settings

Go to Appearance → Customize to access:

- **Company Description** - Main tagline/description
- **Company Email** - Contact email
- **Company Phone** - Contact phone

### Adding Images

1. Create an `images` folder in `wp-content/themes/h2o-studio/`
2. Upload images:
   - `h2o-unlearn-logo.jpg` - Logo
   - `hero-collage.jpg` - Hero image
   - `service-*.jpg` - Service images

3. Update image paths in templates

### Modifying Colors

Edit the CSS variables in `h2o-studio-style.css`:

```css
:root {
    --primary-color: #000000;      /* Black */
    --secondary-color: #ffffff;    /* White */
    --accent-color: #f0f0f0;       /* Light gray */
    --text-dark: #1a1a1a;          /* Dark text */
    --text-light: #666666;         /* Light text */
    --border-color: #e0e0e0;       /* Border color */
}
```

## Contact Form Setup

### Using WordPress Native Form

1. Install "WPForms" or "Gravity Forms" plugin
2. Create a new form with fields:
   - Name
   - Email
   - Message
   - Type (Creator/Brand)
3. Add form shortcode to Join Us page

### Using Custom Contact Form

The template includes a custom contact form handler. To use it:

1. Create a form with these fields:
   - `name` - User name
   - `email` - User email
   - `message` - User message
   - `type` - Type (creator or brand)
   - `h2o_contact_nonce` - Security nonce

2. Form submissions will be emailed to the address set in Theme Settings

## Multi-Language Support

To add multi-language support:

1. Install "WPML" or "Polylang" plugin
2. Configure language settings
3. Translate content for each language:
   - English
   - Spanish
   - Chinese

## SEO Optimization

1. Install "Yoast SEO" or "Rank Math"
2. Configure SEO settings for each page
3. Add meta descriptions
4. Optimize keywords

## Security

1. Install "Wordfence Security" plugin
2. Enable SSL certificate
3. Set up regular backups
4. Keep WordPress and plugins updated

## Performance Optimization

1. Install "WP Super Cache" or "W3 Total Cache"
2. Enable image optimization with "Smush"
3. Minify CSS and JavaScript
4. Use a CDN for static assets

## Analytics

1. Install "MonsterInsights" for Google Analytics
2. Set up conversion tracking
3. Monitor user behavior
4. Track form submissions

## Support

For issues or questions:
- Email: support@h2ostudio.com
- Website: https://h2ostudio.com
- Documentation: https://h2ostudio.com/docs

## License

This WordPress theme is provided as-is for H2O Studio. All rights reserved.

## Version History

- **v1.0** (January 2025) - Initial release
  - Custom post types for Services, Team, Case Studies
  - Multi-language support ready
  - Contact form functionality
  - Responsive design
  - SEO optimized

---

**Last Updated:** January 2025
**Compatibility:** WordPress 5.0+
**PHP Version:** 7.4+
