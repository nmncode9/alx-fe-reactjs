/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // important: ensures Tailwind works in all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};