/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '43': '42.5rem',
        '92':'92%',
      },
      width: {
        '98': '28rem',
        '120':'43rem',
      },
      fontSize: {
        'xss':'0.65rem'
      },
      margin:{
        '10p':'10%'
      }
    },
  },
  plugins: [],
}
