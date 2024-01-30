/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:{
        DEFAULT: '15px'
      }
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'1020px',
      xl:'1330px',
    },
    extend: {
      colors:{
        primary: '#4640DE',
        secondary: '#3e3aa1',
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
        accent: {
          DEFAULT: '#4640DE',
          secondary: '#3e3aa1',
          tertiary: '#90c6cd'
        },
        grey: {
          DEFAULT: '#e8f0f1',
          secondary: '#1A202C',
          tertiary: '#131825',
          
        }
        // 'Plus Jakarta Sans'
      },
      fontFamily:{
        primary: ['Rubik', 'sans-serif']
      },
      // backgroundImage: ()=>({
      //   dots: 'url(../public/img/images/bg-dots.svg)'
      // }),
      backgroundImage:{
        dots: 'url(/img/images/bg-dots.svg)',
      },
      boxShadow:{
        custom1: '0px 2px 40px 0px rgba(8,70,78.08)',
        custom2: '0px 0px 30px 0px rgba(8,73,81,0.06)'
      },
      backgroundImage:{
        services: 'url(/img/services/bg.png)',
        testimonials: 'url(/img/testimonials/bg)',
       
        quoteLeft: 'url(/icons/quote-left.png)',
        quoteRight: 'url(/icons/quote-right.png)',
      },

    },
  },
  plugins: [],
}