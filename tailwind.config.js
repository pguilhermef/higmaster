module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        higfont: ['Montserrat'],
      },
      colors: {
        higblue: '#353b85',
        higgreen: '#0fb1bf',
      },
      backgroundImage: {
        'hig-background': "url('/background_header.png')",
      }
    },
  },
  plugins: [],
};
