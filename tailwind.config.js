/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './assets/**/*.{js,ts,jsx,tsx,ttf}',
    './components/**/*.{js,ts,jsx,tsx}',
    './navigation/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Mono', 'sans-serif'],
        'roboto-black': ['RobotoBlack', 'sans-serif'],
        'roboto-thin': ['RobotoThin', 'sans-serif'],
        'roboto-bold': ['RobotoBold', 'sans-serif'],
        'roboto-light': ['RobotoLight', 'sans-serif'],
        'roboto-medium': ['RobotoMedium', 'sans-serif'],
        'roboto-regular': ['RobotoRegular', 'sans-serif'],
      },
      colors: {
        primary: '#1293A9',
        textGray: '#616165',
        textGre: '#4F4E52',
        softGreen: '#E5F4F3',
        buttonGray: '#CCCCCC',
      },
    },
  },
  plugins: [],
};
