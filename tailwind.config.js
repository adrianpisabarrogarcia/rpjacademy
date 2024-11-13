/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#94C700',
        'secondary': '#575855',
        'secondary-blue': '#80CAE3',
        'secondary-red': '#E39980',
        'accent': '#000000',
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif'],
      },
      backgroundImage: {
        'bento': "url('bento.webp')",
      }
    },
  },
  plugins: [],
}

