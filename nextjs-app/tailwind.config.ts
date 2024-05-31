import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '1': '#0A6AE0',
          '2': '#0855B3',
          '3': '#ACC3DE',
          '4': '#B3D1F5',
          '5': '#D3D1DE',
        },
        neutral: {
          '1': '#FBFCFF',
          '2': '#111129',
          '3': '#677585',
          '4': '#E7F0FC'
        }
      },
      fontSize: {
        'display': ['72px', {
          lineHeight: '66.24px',
          letterSpacing: '-0.02em',
          fontWeight: '300'
        }],
        'h1': ['56px', {
          lineHeight: '51.52px',
          letterSpacing: '-0.02em',
          fontWeight: '300'
        }],
        'h2': ['48px', {
          lineHeight: '56px',
          letterSpacing: '-0.02em',
          fontWeight: '300'
        }],
        'h3': ['32px', {
          lineHeight: '36px',
          letterSpacing: '-0.02em',
          fontWeight: '300'
        }],
        'h4': ['24px', {
          lineHeight: '22.08px',
          letterSpacing: '-0.02em',
          fontWeight: '300'
        }],
        'h5': ['20px', {
          lineHeight: '27px',
          letterSpacing: '-0.02em',
          fontWeight: '300'
        }],
        'href': ['18px', {
          lineHeight: '27px',
          letterSpacing: '-0.02em',
          fontWeight: '300'
        }],
        'p': ['16px', {
          lineHeight: '14.72px',
          letterSpacing: '-0.02em',
          fontWeight: '300'
        }],
      },
    }
  },
  plugins: [],
};
export default config;
