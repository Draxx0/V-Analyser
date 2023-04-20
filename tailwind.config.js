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
