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
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '19': 'repeat(19, minmax(0, 1fr))',
      },
      height: {
        'dvh': '100dvh',
      }
    },
  },
  plugins: [],
}
