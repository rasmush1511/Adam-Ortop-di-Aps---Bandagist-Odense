import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#1F4D4F',
          light: '#2a6567',
          dark: '#163839',
        },
        sage: {
          DEFAULT: '#A8C3B8',
          light: '#c4d9d1',
          dark: '#7fa898',
        },
        sand: {
          DEFAULT: '#EDE6DC',
          light: '#f5f0e8',
          dark: '#d9cfbe',
        },
        ivory: {
          DEFAULT: '#FAF8F4',
          dark: '#f0ece3',
        },
        charcoal: {
          DEFAULT: '#2B2B2B',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
}

export default config
