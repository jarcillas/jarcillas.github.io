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
    },
  },
  plugins: [],
};
