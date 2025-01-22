/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      kyiv: ['KyivType', 'serif']
    },
    extend: {}
  },
  plugins: [],
  safelist: ['bg-red-500', 'text-xl']
}
