import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'luckiest': ['"Luckiest Guy"', 'cursive'],
        'montserrat': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        'gilroy': ['Gilroy', 'sans-serif'],
        'sans': ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
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
    },
  },
  plugins: [],
} satisfies Config;