import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ericlyndert-Blue": "#e0c069",
        "ericlyndert-gray": "#1d1d1d",
        "ericlyndert-fade-blue": "#e5e5e5",
      },
    },
  },
  darkMode: "class",
  plugins: [
  nextui(),
  // require('daisyui'),
],
};

export default config;
