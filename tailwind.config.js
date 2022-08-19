/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './resources/views/*.blade.php',
    './resources/js/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
