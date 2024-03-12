// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { config } = require("@charcoal-ui/tailwind-config");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [config],
};
