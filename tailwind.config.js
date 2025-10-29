/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A202C", // Dark Slate Gray - for background
        secondary: "#66FCF1", // Bright Cyan - for accents/highlights
        tertiary: "#2D3748", // Darker Slate Gray - for cards/sections
        textPrimary: "#A0AEC0", // Light Gray - for general text
        textSecondary: "#EDF2F7", // Off-White - for headings/important text
      },
      keyframes: {
        'gradient-animation': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-animation': 'gradient-animation 15s ease infinite',
      },
    },
  },
  plugins: [],
}
