/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'black-sidebar':'#000000',
        'gray-in-black':'#1F1F1F',
        'gray':'#FAFAFA',
        'gray-text':'#CFCFCF',
        'green-text':'#127D00',
        'light-green':'#F3FFF1',
        'orange-text':'#F24B00',
        'gray-text-in-card': '#4A4A4A',
        'orange-book-call': '#F24B00',
        'off-white':'#DCDCDC',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '43': '42.5rem',
        '92':'92%',
        
      },
      minHeight:{
        '95vh':'95vh',

      },

      width: {
        '98': '28rem',
        '120':'43rem',
      },
      fontSize: {
        'xss':'0.65rem',
        '20p':'20px'
      },
      margin:{
        '10p':'11%'
      },
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      gridTemplateColumns: {
        '90-10': '90% 10%'
      }
    },
    animation: {
      marquee: 'marquee 25s linear infinite',
    },
  },
  plugins: [],
}
