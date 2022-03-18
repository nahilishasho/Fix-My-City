module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Mulish'],
        'body': ['"Mulish"'],
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.255)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.255)',
            '0 45px 65px rgba(0, 0, 0, 0.155)'
        ]
      },
      colors: {
        'blue': '#2F5061',
      },
      

    },
  },
  plugins: [],
}
