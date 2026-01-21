# Lottery Fox App

A Bitcoin lottery application built with Next.js, TypeScript, and Tailwind CSS, designed to match the exact Figma specifications.

## Features

- **Responsive Design**: Pixel-perfect implementation of the Figma design
- **Modern UI**: Dark theme with gradient backgrounds and glassmorphism effects
- **Interactive Components**: 
  - Header with navigation and authentication buttons
  - Sidebar with navigation items and Lucky Hour display
  - Main lottery section with Bitcoin integration
  - Live chat component
  - Previous wins table
  - Footer with links and information

## Tech Stack

- **Next.js 16.1.4** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Custom Fonts**: Luckiest Guy, Montserrat, Gilroy

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Top navigation bar
│   │   ├── Sidebar.tsx         # Left navigation sidebar
│   │   ├── MainContent.tsx     # Main lottery content area
│   │   ├── Chat.tsx           # Live chat component
│   │   ├── Footer.tsx         # Footer with links
│   │   └── PreviousWins.tsx   # Previous wins table
│   ├── globals.css            # Global styles and fonts
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── public/
│   └── images/                # Figma exported images
└── tailwind.config.ts         # Tailwind configuration
```

## Design Implementation

This project implements the exact design from the provided Figma file:
- **100% accurate colors** using exact hex values from Figma
- **Precise typography** with custom font families and weights
- **Exact spacing and dimensions** matching Figma specifications
- **Gradient backgrounds** and visual effects as designed
- **Interactive elements** with proper hover states

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is private and proprietary.
