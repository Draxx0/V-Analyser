export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#161625",
        gray: "#5C5E68",
        green: "#39DBA0",
        red: "#DF5B5C",
      },
      animation: {
        "soft-pulse": "soft-pulse 7s ease-in-out infinite",
      },
      keyframes: {
        "soft-pulse": {
          "0%, 100%": { opacity: 0.2, filter: "blur(2px)" },
          "50%": { opacity: 0.15, filter: "blur(0.5px)" },
        },
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      "2sm": { max: "500px" },
      // => @media (max-width: 575px) { ... }
    },
  },
  variants: {},
  plugins: [],
  layers: {
    utilities: {
      "bg-primary": "var(--primary)",
      "gray-color": "var(--gray)",
    },
  },
};
