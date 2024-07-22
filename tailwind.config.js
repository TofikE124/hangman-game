/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: {
        max: "48rem",
      },
      md: {
        min: "48rem",
        max: "60rem",
      },
      mdsm: {
        max: "60rem",
      },
      lgmd: { min: "48rem" },
      lg: {
        min: "60rem",
      },
    },
    extend: {
      colors: {
        "dark-navy": "#261676",
        blue: "#2463FF",
        white: "#fff",
      },
      boxShadow: {
        "button-blue":
          "0px -2px 0px 3px #140E66 inset, 0px 1px 0px 6px #3C74FF inset",
        "button-pink":
          "0px -2px 0px 3px #140E66 inset, 0px 1px 0px 6px #C642FB inset",
      },
      backgroundImage: {
        "button-pink": "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
        "button-pink-hover":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%), linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
        "button-blue-hover":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%)",
      },
    },
  },
  plugins: [],
};
