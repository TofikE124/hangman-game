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
        "icon-pink-lg":
          "0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9D2DF5 inset",
        "icon-pink-sm": "0px -6px 0px 7px rgba(157, 45, 245, 0.25) inset",
        panel: "0px -8px 0px 4px #140E66 inset, 0px 6px 0px 8px #2463FF inset",
      },
      backgroundImage: {
        "button-pink": "linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
        "button-pink-hover":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%), linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%)",
        panel:
          "linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%)",
        "text-primary": "linear-gradient(180deg, #67B6FF 16.42%, #FFF 100%)",
        overlay:
          "linear-gradient(180deg, #1A043A 0%, #151278 70.31%, #2B1677 100%)",
      },
    },
  },
  plugins: [],
};
