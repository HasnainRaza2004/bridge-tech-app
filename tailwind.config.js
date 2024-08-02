/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#316CB5",
        "secondary": "#1C4580",
        "grey": "#818281",
        "white": "#FFFFFF",
        "black": "#000000",
      }
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [
  ]
}

