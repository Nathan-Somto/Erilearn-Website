/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#EF4D48',
        secondary:'#3E3D3D'
      },
      fontFamily:{
        poppins:['var(--font-poppins)', 'sans']
      }
    },
  },
  plugins: [],
}
