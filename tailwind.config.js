import remToPxPlugin from "tailwindcss-rem-to-px";

/** @type {import('tailwindcss').Config} */
export default {
  // Use prefix tw- to avoid conflicts with other Dawn styles
  // prefix: 'tw-',
  content: ["./**/*.{js,json,liquid}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      // backgroundImage: {
      //   slideOne: "url('/assets/sliderOne.jpg')",
      //   slideTwo: "url('/assets/sliderTwo.jpg')",
      // },
    },
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};
