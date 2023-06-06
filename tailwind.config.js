/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'C-gray3': '#333333',
        'C-gray2': '#8C8C8C',
        'C-gray1': '#D4DCE5',
        'C-blue4': '#0B1E34',
        'C-blue3': '#2C3E53',
        'C-blue2': '#023C5A',
        'C-blue1': '#015F8A',
        'C-yellow3': '#FFB000',
        'C-yellow2': '#FFBA40',
        'C-yellow1': '#FFD35C',
        'C-white': '#F4F6FF',
      },


    },
  },
  plugins: [],
  plugins: [require("daisyui")],
}