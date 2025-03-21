/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        'gray1':'#0132201A',
        'gray2':'#F5F5F5',
        'darkgary':'#013220',
        'textgray1':'#12121266',
        'darkyellow':'#A67C00'
      },

      screens:{
        mdsm:'425px',
        msm:'320px'
      
      }
    },
  },
  plugins: [],
}

