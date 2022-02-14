module.exports = {
  purge: ["./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.js", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        alfa: ["Alfa Slab One", "serif"],
        courier: ["Courier Prime", "monospace"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        contentz: {
          "0%, 100%": {
            transition: "transform 1s",
            transformStyle: "preserve-3d",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        contentz: "content 1s ease-in-out",
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
