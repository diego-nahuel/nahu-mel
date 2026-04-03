'use client';

import { createTheme } from '@mui/material/styles';

// Extend the MUI theme types to include 'terracotta'
declare module '@mui/material/styles' {
  interface Palette {
    terracotta: Palette['primary'];
  }
  interface PaletteOptions {
    terracotta: PaletteOptions['primary'];
  }
}

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
    terracotta: {
      main: '#C0745A',
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
      primary: '#1A1A1A', // Very dark gray/soft black
      secondary: '#4A4A4A',
    },
  },
  typography: {
    fontFamily: 'var(--font-comfortaa), sans-serif',
    h1: {
      fontFamily: 'var(--font-cursive), cursive',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'var(--font-cursive), cursive',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'var(--font-cursive), cursive',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'var(--font-comfortaa), sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    h5: {
      fontFamily: 'var(--font-comfortaa), sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'var(--font-comfortaa), sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'var(--font-comfortaa), sans-serif',
      fontSize: '1rem', // 16px
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: 'var(--font-comfortaa), sans-serif',
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
