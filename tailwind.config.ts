import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        participantApp: {
          green: '#28A745',
          red: '#F10606',
          yellowMix: '#F9AE0D',
        },
      },
    },
  },
  plugins: [],
};

export default config;
