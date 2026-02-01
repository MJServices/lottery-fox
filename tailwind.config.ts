import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'montserrat': ['Inter', 'var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        'gilroy': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'figma-glow': '0px 4px 12.8px 0px rgba(190, 255, 37, 0.33)',
        'figma-button': '0px 3px 0px 0px #33383D',
        'figma-orange': '0px 3px 0px 0px #C3502B',
        'figma-blur': '0px 4px 16.6px 0px rgba(0, 0, 0, 0.25)',
      },
      blur: {
        '72': '72px',
        '100': '100px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-safe': 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xs': ['0.5rem', { lineHeight: '0.625rem' }],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.safe-area-inset-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-area-inset-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-area-inset-left': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-area-inset-right': {
          paddingRight: 'env(safe-area-inset-right)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;