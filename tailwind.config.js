/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-black': '#1f2937',
        'btn-white': '#e5e7eb'
      },
      backgroundImage: {
        'down-arrow': "url('/assets/images/downArrow.svg')",
      },
      backgroundPosition: {
        'arrow-position': 'right 0.5rem center;',
      }
    },
  },
  plugins: [],
}
