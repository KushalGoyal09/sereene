# Sereene Healthcare Website

A modern, professional healthcare website with a stunning black and white design theme. Built with pure HTML, CSS, and JavaScript for optimal performance and compatibility.

## Features

### Design
- **Minimalist Black & White Theme** - Elegant, professional appearance
- **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **Modern Typography** - Using Inter and Playfair Display fonts
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Interactive Elements** - Hover effects, transitions, and micro-interactions

### Sections
1. **Hero Section** - Full-screen hero with animated text and statistics
2. **About Section** - Company information with feature highlights
3. **Products Section** - Grid layout showcasing product categories
4. **Why Choose Us** - Values and differentiators
5. **Testimonials** - Automatic slider with client reviews
6. **Contact Section** - Contact form and information
7. **Footer** - Comprehensive footer with links and social media

### Technical Features
- Smooth scroll navigation
- Intersection Observer API for scroll animations
- Counter animations for statistics
- Automatic testimonial slider with controls
- Mobile-responsive navigation menu
- Form validation
- SEO-friendly structure
- Accessibility features (keyboard navigation, ARIA labels)
- Performance optimized (lazy loading, debounced scroll events)

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Getting Started

### Option 1: Open Locally
Simply open `index.html` in your web browser:
```bash
open index.html
```

### Option 2: Use a Local Server
For best results, use a local development server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Guide

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-gray-900: #0A0A0A;
    /* ... more colors */
}
```

### Typography
Change fonts by updating the Google Fonts import in `index.html` and the CSS variables:
```css
:root {
    --font-primary: 'Inter', sans-serif;
    --font-display: 'Playfair Display', serif;
}
```

### Content
Update text content directly in `index.html`:
- Company name: Search for "SEREENE" and "Sereene"
- Contact information: Update in the contact section
- Testimonials: Modify in the testimonials section
- Products: Update in the products grid section

### Images
Add your images to an `images/` folder and update the placeholders:
```html
<img src="images/your-image.jpg" alt="Description">
```

## Performance Tips

1. **Optimize Images** - Compress images and use modern formats (WebP)
2. **Minify Files** - Minify CSS and JavaScript for production
3. **CDN** - Host static assets on a CDN
4. **Caching** - Implement browser caching
5. **Lazy Loading** - Already implemented for images

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select main branch as source
4. Your site will be live at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect your Git repository
3. Site will be automatically deployed

### Vercel
```bash
npx vercel
```

## Accessibility

The website includes:
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Alt text for images (add your own)
- Sufficient color contrast

## Future Enhancements

- [ ] Add actual product images
- [ ] Implement backend for contact form
- [ ] Add more product pages
- [ ] Integrate e-commerce functionality
- [ ] Add blog section
- [ ] Implement multi-language support
- [ ] Add search functionality
- [ ] Integrate analytics

## Credits

- **Design**: Custom design inspired by modern healthcare websites
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Icons**: SVG icons (inline)

## License

This project is free to use for personal and commercial purposes.

## Support

For questions or issues, please contact: support@sereene.com

---

Built with ❤️ for Sereene Healthcare
