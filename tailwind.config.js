/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Activer le mode sombre avec la classe
  theme: {
    extend: {
      colors: {
        // Couleurs pour le mode sombre
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Couleurs spécifiques mode sombre
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          card: '#334155',
          text: '#f1f5f9',
          textSecondary: '#cbd5e1',
          border: '#475569',
        }
      },
    },
  },
  plugins: [],
}