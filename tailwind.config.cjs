/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",
      "brand-white": "#FFFFFF",
      "brand-warning": "CC6F6F",
      "brand-grey-200": "#C8C8D1",
      "brand-grey-500": "#7C7C8A",
      "brand-grey-800": "#202024",
      "brand-grey-900": "#121214",
      "brand-lilac-300": "#D1B9E3",
      "brand-lilac-500": "#9879AF",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
