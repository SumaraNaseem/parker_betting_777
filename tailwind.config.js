/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue-background': '#001F3F',
        'custom-yellow-background':'#FFC007',
        'footer-bg-color':'#101010',
        'sidebar-bg-color':'#00162D',
        'tablecolor-blue':'#98D4FF',
        'tableColor-pink':'#FFC3D0',
        
        
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'ubuntu':['ubuntu-medium','sans-serif'],
      },
      colors: {
        customTextColor: {
          light: '#F3E8FF', // Example light color
          DEFAULT: '#A855F7', // Default color
          dark: '#343A40', // Example dark color
          android:'#95CF00'
        },
      },
    },
  },
  plugins: [
   // other plugins...
  ],
}