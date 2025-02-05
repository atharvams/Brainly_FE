/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
          purple: {
            700: "#5046E4",
            400: "#E0E7FF",
          },
          grey:{
            500: "#F9FAFB",
          },
      },
    },
  },
  plugins: [],
};
