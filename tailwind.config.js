module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#ff225a',
        neon: '#18d6cc',
      },
      boxShadow: {
        'highlight': '5px 5px 0px 0px #ff225a30',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
