module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brandone: {
          50: "#fff2ed",
          100: "#ffe8e3",
          200: "#d8aca7",
          300: "#cea29d",
          400: "#c49893",
          500: "#ba8e89",
          600: "#b0847f",
          700: "#a67a75",
          800: "#9c706b",
          900: "#926661",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
