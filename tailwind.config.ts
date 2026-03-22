import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hacker/Matrix Color System
        'matrix-green': '#00FF00',
        'matrix-dark-green': '#003300',
        'matrix-black': '#000000',
        'matrix-lime': '#39FF14',
        'matrix-shadow': '#001100',
      },
      backgroundImage: {
        'gradient-matrix': 'linear-gradient(135deg, #001100 0%, #000000 100%)',
        'gradient-green': 'linear-gradient(135deg, #00FF00 0%, #39FF14 100%)',
      },
      boxShadow: {
        'matrix-glow': '0 0 30px rgba(0, 255, 0, 0.5), 0 10px 40px rgba(0, 0, 0, 0.8)',
        'matrix-strong': '0 0 50px rgba(0, 255, 0, 0.8)',
        'glow': '0 0 40px rgba(0, 255, 0, 0.3)',
      },
      fontFamily: {
        'hacker': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'terminal': ['Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
