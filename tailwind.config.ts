import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

import withMT from '@material-tailwind/react/utils/withMT';

const config = withMT({
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: colors.neutral,
        font: colors.neutral,
        primary: colors.orange,
      },

      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
});
export default config;
