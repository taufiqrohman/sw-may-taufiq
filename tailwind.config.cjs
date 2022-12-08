/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans'],
        'handwriting': ['Gwendolyn'],
        'body': ['Open Sans'],
        'arabic': ['Amiri']
      },
    },
  },
  plugins: [],
}
