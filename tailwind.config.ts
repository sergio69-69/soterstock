import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0C2C4D',
          light: '#366287',
        },
        accent: {
          DEFAULT: '#569EE6',
          hover: '#4278AF',
        },
        coral: {
          DEFAULT: '#F0774A',
        },
        surface: {
          DEFAULT: '#F7FAFC',
          dark: '#05121F',
        },
        body: '#2F2F2F',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        pill: '50px',
      },
    },
  },
  plugins: [],
}
export default config
