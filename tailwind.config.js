/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Roboto Mono"', 'monospace'],
        sofia: ['"Sofia Sans Condensed"', 'sans-serif'],
        spline: ['"Spline Sans Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
