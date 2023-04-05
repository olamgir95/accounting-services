const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        navLink: "22px",
        title80: "80px",
        title28: "28px",
        title60: "60px"
      },
      height: {
        headerHeight: "810px",
        slide: '1200px'
      },
      colors: {
        delayedYellow: "#FCFE00",
        buttonColor: "#125AD3",
        subTitle:"#fffff599",
        bgNavbar:"#1c2636",
        closeBtn:"#A6A6A6",
        secTitle:"#9298a4"
       
      },
      fontFamily: {
        maven: ['"Maven Pro"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        phone:"390px"
      },
      backgroundImage: {
        backgroundHome:"url('/src/assets/imgs/accountingfullimage.jpg')",
      }
    },
  },
  plugins: [],
};

