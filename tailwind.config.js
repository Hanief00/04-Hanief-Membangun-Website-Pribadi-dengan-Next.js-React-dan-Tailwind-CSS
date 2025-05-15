/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // GANTI dari default (media) ke class
    content: [
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
}
  