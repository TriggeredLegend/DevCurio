import type { Config } from 'tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import typographyPlugin from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5faff',
          100: '#e0f0ff',
          200: '#b3daff',
          300: '#80c0ff',
          400: '#4da6ff',
          500: '#1a8cff',
          600: '#0066cc',
          700: '#004c99',
          800: '#003366',
          900: '#001933',
        },
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin],
}

export default config
