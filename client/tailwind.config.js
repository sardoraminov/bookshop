module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#F5CB5C",
          darken: "#F6AA1C",
        },
        dark: {
          primary: "#333533",
          secondary: "#242423",
        },
        gray: {
          light: "#E8EDDF",
          darken: "#CFDBD5",
        },
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        exo: ["Exo 2", "sans-serif"],
        manr: ["Manrope", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
