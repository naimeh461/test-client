/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1200px',
      },
      colors: {
        primary: {
          50: "#FCE8E8",
          100: "#F9D2D2",
          200: "#F4A4A4",
          300: "#EE7777",
          400: "#E84A4A",
          500: "#E84A4A",
          600: "#B51717",
          700: "#881111",
        },
        secondary:{
          500: "#4ECA77"
        }
      },
    },
  },
  plugins: [require("daisyui","tailwind-scrollbar")],
  darkMode: 'class',
};

