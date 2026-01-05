import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0b0f1a',
        slateblue: '#1d2a44',
        accent: '#4f8ff7',
      },
      boxShadow: {
        soft: '0 12px 30px rgba(15, 23, 42, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
