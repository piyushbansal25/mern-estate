/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './public/index.html',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
}