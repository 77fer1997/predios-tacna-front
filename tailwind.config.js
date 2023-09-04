/** @type {import('tailwindcss').Config} */
import predio from "/public/assets/tacna-flag.png";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        cuadrilatero:
          "url('https://mosquerarosado.com/wp-content/themes/mosquerarosado2023/images/bg_trapecio.svg')",
        predio: `url(/bg-gradient.webp)`,
      }),
    },
  },
  plugins: [require("tailwindcss-animated")],
  corePlugins: {
    preflight: false,
  },
};
