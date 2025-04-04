/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      animation: {
        "moving-line": "moving 2s linear infinite",
      },
      keyframes: {
        moving: {
          "0%": { left: "-20px" },
          "100%": { left: "100%" },
        },
      },
    },
  },
};
