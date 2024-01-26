import type { Config } from 'tailwindcss';
import { createThemes } from 'tw-colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    createThemes({
      light: {
        primary: '#28AAE1',
        secondary: '#FAB040',
        accent: '#ED1D23'
      },
      dark: {
        primary: '#28AAE1',
        secondary: '#FAB040',
        accent: '#ED1D23'
      },
      unicorn: {
        primary: '#28AAE1',
        secondary: '#FAB040',
        accent: '#452eec',
        appbar: 'var(--appbar)'
      }
    })
  ]
};
export default config;
