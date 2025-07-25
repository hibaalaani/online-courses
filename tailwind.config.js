/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Indigo 600
        secondary: '#10B981', // Green 500
        accent: '#F59E0B', // Amber 500
        neutral: '#F3F4F6', // Gray 100
        text: '#1F2937', // Gray 800
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in': 'slideIn 1s ease-in-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        float: 'float 3s infinite',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        backgroundShift: 'backgroundShift 10s ease-in-out infinite',
        waveSlow: 'waveSlow 40s linear infinite',
        waveMedium: 'waveMedium 30s linear infinite',
        waveFast: 'waveFast 20s linear infinite',
        starsMove: 'starsMove 10s ease-in-out infinite',
        spinSlow: 'spin 20s linear infinite',
        flicker: 'flicker 2s infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        slide: 'slide 30s linear infinite',
        // ADD THIS LINE for the blob animation
        blob: 'blob 7s infinite',
        'bounce-subtle': 'bounce-subtle 2s infinite ease-in-out',
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-50%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        backgroundShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        waveSlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
        waveMedium: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        waveFast: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-75%)' },
        },
        starsMove: {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.5 },
          '80%': { opacity: 0.65 },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
          '80%': { opacity: 0.85 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-66.666%)' }
        },
        // ADD THIS KEYFRAME for the blob animation
        blob: {
            "0%": {
                transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
                transform: "translate(30px, -50px) scale(1.1)",
            },
            "66%": {
                transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
                transform: "translate(0px, 0px) scale(1)",
            },
        },
      },
      // ADD THIS FOR ANIMATION DELAYS
      // This allows you to use classes like 'animation-delay-200ms', 'animation-delay-2s', etc.
      transitionDelay: { // Tailwind's transitionDelay is often extended for animation-delay
        '0': '0s',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '1500': '1500ms',
        '2000': '2000ms', // Add the specific 2000ms delay
        // You can add more custom delays as needed
      }
    },
  },
  plugins: [],
}