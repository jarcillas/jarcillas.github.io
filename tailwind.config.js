/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Outfit"],
        script: ["Style Script"],
      },
      keyframes: {
        tada: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },

          "10%, 20%": {
            transform: "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",
          },

          "30%, 50%, 70%, 90%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
          },

          "40%, 60%, 80%": {
            transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
          },

          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
      animation: {
        tada: "tada 1.2s infinite",
      },
      colors: {
        primary: "#88CFE1",
        secondary: "#F7F7F7",
        accent: "#FF6A00",
        dark: "#000000",
        light: "#FFFFFF",
        "dark-gradient-1": "#12162A",
        "dark-gradient-2": "#0A0B12",
      },
    },
  },
  plugins: [],
};
