import { Theme } from '../wrapper/types'

const defaultTheme: Theme = {
  cubicBezier: {
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
  palette: {
    primary: ['#B23A9C', '#696cc6', '#484b94', '#F6595D'],
    error: ['#d32f2f', '#f44336', '#f18f8f', '#ffcdd2'],
    alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
    success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
    grayscale: ['#000000', '#333333', '#666666', '#a9a8a8', '#fff', 'transparent'],
    gradient: [
      'linear-gradient(211.89deg, #FEAC49 9.27%, #FF292B 37.76%, #F02C41 54.97%, #B23A9C 98.01%)',
      'linear-gradient(88.9deg, #B23A9C -0.94%, #D93264 99.23%)',
    ],
  },
  fonts: {
    primary: 'Gotham, sans-serif',
    secondary: 'sans-serif',
  },
  shadows: {
    none: 'none',
    extraSmall: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    small: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    large: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    extraLarge: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
  sizes: {
    extraLarge: '1.8em',
    large: '1.6em',
    medium: '1.4em',
    normal: '1.2em',
    small: '1em',
    extraSmall: '.8em',
  },
  fontWeight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 800,
    ultra: 900,
  },
  mediaValues: {
    huge: '1440px',
    large: '1200px',
    medium: '992px',
    small: '768px',
    extraSmall: '576px',
  },
}

export default defaultTheme
