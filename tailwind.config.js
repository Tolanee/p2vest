/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './assets/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './navigation/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-black': ['Roboto-Black', 'sans-serif'],
        'roboto-thin': ['Roboto-Thin', 'sans-serif'],
        'roboto-bold': ['Roboto-Bold', 'sans-serif'],
        'roboto-light': ['Robot-Light', 'sans-serif'],
        'roboto-medium': ['Roboto-Medium', 'sans-serif'],
        'roboto-regular': ['Roboto-Regular', 'sans-serif'],
        'mono-regular': ['PTMono-Regular', 'sans-serif'],
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
