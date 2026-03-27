/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        accent: {
          500: '#06b6d4',
        },
        dark: '#111827',
        gray: {
          50: '#f9fafb',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        elevated: '0 10px 30px rgba(17, 24, 39, 0.08)',
        glass: '0 12px 40px rgba(15, 23, 42, 0.25)',
      },
    },
  },
  plugins: [],
};
