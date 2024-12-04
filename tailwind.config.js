/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9B5DE5',   // Vibrant purple
        secondary: '#6B46C1', // Deeper purple
        darkBg: '#1A1B27',    // Dark background color
        accent: '#F15BB5',    // Bright accent color
        textPrimary: '#E0E0E0', // Primary text color
        textSecondary: '#B3B3B3', // Secondary text
        muted: '#A1A1AA',     // Muted text color
      },
    },
  },
  plugins: [],
}

