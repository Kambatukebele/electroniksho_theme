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
      // Add custom utilities to extend the default Tailwind CSS classes
      scrollbar: {
        none: {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      },
      keyframes: {
        scroll: {
          '0%' : { transform: 'translateX(0)'},
          '100%' : { transform: 'translateX(-100%)'}
        }
      },
      animation: {
        scroll: 'scroll 20s linear infinite'
      }
    },
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
