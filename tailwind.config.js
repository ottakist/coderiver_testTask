/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      kyiv: ['KyivType', 'serif']
    },
    screens: {
      tablet: '700px',
      // => @media (min-width: 700px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {}
  },
  plugins: ['prettier-plugin-tailwindcss'],
  safelist: ['bg-red-500', 'text-xl']
}
