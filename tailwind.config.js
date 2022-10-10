/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        projectTheme: {
          primary: "#24aadd",
          secondary: "#ee341d",
          accent: "#575757",
          neutral: "#1E1E1E",
          "base-100": "#FFFFFF",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
