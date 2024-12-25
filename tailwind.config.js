/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green-neon': 'hsl(75, 94%, 57%)',
        'grey600': 'hsl(0, 0%, 25%)',
        'grey700': 'hsl(0, 0%, 20%)',
        'grey800': 'hsl(0, 0%, 12%)',
        'grey900': 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        'inter': ['inter', 'Arial'], 
      },
    },
  },
  plugins: [],
}

