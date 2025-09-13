# AdSnap Privacy Policy Website

A professional, modern Next.js website for displaying the AdSnap Chrome extension privacy policy.

## Features

- 🎨 **Modern UI Design** - Clean, professional interface with Tailwind CSS
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Next.js 14 and optimized for speed
- 🔒 **Privacy-Focused** - Clear, transparent privacy policy presentation
- 🎯 **SEO Optimized** - Proper meta tags and structured content
- ♿ **Accessible** - WCAG compliant design patterns

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adsnap-privacy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main privacy policy page
├── components/
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  }
}
```

### Content
Update the privacy policy content in `app/page.tsx`. The content is structured in sections for easy modification.

### Branding
- Update the logo and brand name in `components/Header.tsx`
- Modify contact information in `components/Footer.tsx`
- Update meta tags in `app/layout.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact:
- Email: privacy@adsnap.com
- Website: www.adsnap.com
