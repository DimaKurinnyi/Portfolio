/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1150px' },
      xl: { max: '1100px' },
      lg: { max: '900px' },
      m: { max: '850px' },
      smh: { max: '632px' },
      sm: '640px',
      xs: { max: '450px' },
    },
    extend: {
      backgroundImage:{
        'about':"url('https://www.xero.com/content/dam/xero/pilot-images/product-pages/xero-me/xero-me-video-header.1646877536840.jpg')"
      }
    },
  },
  plugins: [],
};
