'use client';

import { Box, Typography, Container, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: '100dvh', md: 'calc(100vh - 80px)' }, // 100dvh for mobile, frame height for desktop
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'url("/home-textura-color-terracota.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        color: 'text.primary',
        px: 2,
        // Ensure consistent behavior in the framed layout
        '@media (max-width: 1023px)': {
          minHeight: '100dvh',
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <Container maxWidth="sm">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Typography
              sx={{
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                mb: 6,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                fontWeight: 800,
              }}
            >
              Nos Casamos
            </Typography>
          </motion.div>

          <Box sx={{ mb: { xs: 4, sm: 6 } }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '5rem', sm: '7rem', md: '8.5rem' },
                  fontFamily: 'var(--font-cursive), cursive',
                  lineHeight: 0.8,
                  mb: 2,
                }}
              >
                Nahuel
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontFamily: 'var(--font-cursive), cursive',
                  my: 1,
                }}
              >
                &
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '5rem', sm: '7rem', md: '8.5rem' },
                  fontFamily: 'var(--font-cursive), cursive',
                  lineHeight: 0.8,
                  mt: 1,
                }}
              >
                Melanie
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Typography
              variant="body1"
              sx={{
                textTransform: 'uppercase',
                letterSpacing: '0.4em',
                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                fontWeight: 800,
                mt: { xs: 2, sm: 4 },
              }}
            >
              1 de Mayo 2026
            </Typography>
          </motion.div>
        </Container>
      </motion.div>

      {/* Scroll Indicator */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        sx={{
          position: 'absolute',
          bottom: 40,
          display: 'flex', // Visible on all viewports
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            opacity: 0.7,
            fontSize: '0.7rem',
          }}
        >
          Desliza
        </Typography>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon 
            icon="material-symbols:keyboard-arrow-down-rounded" 
            width="24" 
            height="24" 
            style={{ opacity: 0.6 }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
