/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        c_red: "#ff402c",
        c_orange: "#ffa300",
        c_yellow: "#e5ff1c",
        c_purple: "#ad6eff",
        c_blue: "#4299f7",
        c_green: "#16e589",
      },
    },
  },
  plugins: [],
};
