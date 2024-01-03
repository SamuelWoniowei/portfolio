/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        errie: '#191716',
        name: '#546a7b',
        intro: '#393d3f',
        text: '#011627',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        walter: ['Walter Turncoat', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        front: 'url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop)'
      }
    },
  },
  plugins: [],
}

