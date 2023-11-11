const { nextui } = require("@nextui-org/react");
import { colors } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#6c9454",
            '50': '#f6f9f4',
            '100': '#ebf2e6',
            '200': '#d7e5cd',
            '300': '#b5cfa6',
            '400': '#8db177',
            '500': '#6c9454',
            '600': '#567841',
            '700': '#455f36',
            '800': '#394d2e',
            '900': '#304027',
            '950': '#172211',
          }
        }
      }
    }
  })],
}
