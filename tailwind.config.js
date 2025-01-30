/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#fdf8f1',
          100: '#f9ecd8',
          200: '#f3d9b2',
          300: '#e8be80',
          400: '#dca155',
          500: '#d38b37',
          600: '#bc712a',
          700: '#9c5a24',
          800: '#7e4923',
          900: '#673d20',
        },
        sage: {
          50: '#f6f7f5',
          100: '#e7eae4',
          200: '#d1d7cc',
          300: '#b3bcaa',
          400: '#939c88',
          500: '#7b836f',
          600: '#636a59',
          700: '#4f5447',
          800: '#40443a',
          900: '#363a32',
        }
      }
    },
  },
  plugins: [],
}; 