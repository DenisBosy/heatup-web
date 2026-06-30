/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(230 60% 35%)',
        'primary-dark': 'hsl(230 60% 28%)',
        accent: 'hsl(345 80% 50%)',
        muted: 'hsl(220 15% 96%)',
        'muted-fg': 'hsl(220 10% 50%)',
        foreground: 'hsl(220 20% 12%)',
        border: 'hsl(220 15% 90%)',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, hsl(345 80% 45%) 0%, hsl(280 50% 40%) 35%, hsl(230 60% 35%) 100%)',
        'brand-subtle': 'linear-gradient(135deg, hsl(345 80% 45% / .08) 0%, hsl(230 60% 35% / .08) 100%)',
      },
    },
  },
  plugins: [],
}