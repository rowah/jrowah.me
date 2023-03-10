/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textDecoration: {
        underline: "underline",
      },
      fontSize: {
        "3xl": "2rem",
      },
      textColor: {
        blue: "#007aff",
      },
    },
  },
  plugins: [],
};
