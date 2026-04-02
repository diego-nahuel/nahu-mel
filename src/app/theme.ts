'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5d5d5d', // Soft Dark Gray
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#a9bcd0', // Soft Pastel Blue
      contrastText: '#ffffff',
    },
    error: {
      main: '#f08080', // Soft Red (hearts)
    },
    background: {
      default: '#e8f0e8', // Soft Pastel Sage Green
      paper: '#ffffff',
    },
    text: {
      primary: '#5d5d5d',
      secondary: '#7a7a7a',
    },
  },
  typography: {
    fontFamily: 'var(--font-montserrat), sans-serif',
    h1: {
      fontFamily: 'var(--font-cursive), cursive',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'var(--font-cursive), cursive',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'var(--font-cursive), cursive',
      fontWeight: 400,
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1rem', // 16px
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '0.875rem', // 14px
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
          padding: '10px 24px',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
