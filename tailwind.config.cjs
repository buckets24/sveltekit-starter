/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#DA303D",
        bodyBG: "rgb(28, 28, 28)",
        authCard: "rgba(50, 61, 109, 0.5)"
      },
      borderRadius: {
        'default': '30px',
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["lofi"],
  },
}
