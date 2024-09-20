/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4a5568',
          DEFAULT: '#2d3748',
          dark: '#1a202c',
        },
        secondary: {
          light: '#718096',
          DEFAULT: '#4a5568',
          dark: '#2d3748',
        },
        accent: {
          light: '#ed8936',
          DEFAULT: '#dd6b20',
          dark: '#c05621',
        },
        neutral: {
          light: '#e2e8f0',
          DEFAULT: '#a0aec0',
          dark: '#718096',
        },
        code: {
          light: '#fbd38d',
          DEFAULT: '#f6ad55',
          dark: '#ed8936',
        },
      },
    },
  },
  plugins: [],
}

