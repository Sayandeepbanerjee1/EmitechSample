/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "2rem",
          "2xl": "3rem",
        },
      },
    },
  },



  plugins: [],
}