'use client';

import { Box, Typography, Container, Fade } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(rgba(232, 240, 232, 0.7), rgba(232, 240, 232, 0.7)), url("https://www.transparenttextures.com/patterns/natural-paper.png")',
        bgcolor: 'background.default',
        p: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 20, md: 40 },
          left: { xs: 20, md: 40 },
          right: { xs: 20, md: 40 },
          bottom: { xs: 20, md: 40 },
          border: '1px solid rgba(93, 93, 93, 0.2)',
          pointerEvents: 'none',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
            border: '1px solid rgba(93, 93, 93, 0.1)',
          }
        }}
      />

      <Fade in={true} timeout={2000}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              color: 'primary.main',
              fontWeight: 400,
              letterSpacing: 4,
              mb: 2,
              opacity: 0.8,
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            ¡NOS CASAMOS!
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '4.5rem', sm: '7rem', md: '9rem' },
              color: 'primary.main',
              lineHeight: 1.1,
              mb: 1,
              fontFamily: 'var(--font-cursive), cursive',
            }}
          >
            Nahuel & Melanie
          </Typography>

          <Box
            sx={{
              width: '80px',
              height: '1px',
              bgcolor: 'secondary.main',
              mx: 'auto',
              my: 4,
            }}
          />

          <Typography
            variant="h4"
            sx={{
              color: 'text.primary',
              fontWeight: 400,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              letterSpacing: 2,
            }}
          >
            1 DE MAYO • 2026
          </Typography>
        </Container>
      </Fade>
      
      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
            '40%': { transform: 'translateY(-10px)' },
            '60%': { transform: 'translateY(-5px)' },
          }
        }}
      >
        <Typography variant="body2" sx={{ color: 'primary.main', opacity: 0.6 }}>
          Desliza para ver más
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
