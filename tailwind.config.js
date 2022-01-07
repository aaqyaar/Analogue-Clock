module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins', 'sans-serif'],
      }

    },
  },
  variants: {
    extend: {
      rotate: {
        skin: {
          base: 'var(--rotation)'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  
}
