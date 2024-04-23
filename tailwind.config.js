/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/*.md',
    "./*.{html,js}",
    './*.md'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
}

