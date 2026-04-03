'use client';

import { useState, useEffect } from 'react';
import { Box, AnimatePresence, motion } from 'framer-motion';
import { Box as MuiBox, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

interface AnimatedEnvelopeModalProps {
  onOpen: () => void;
}

const AnimatedEnvelopeModal = ({ onOpen }: AnimatedEnvelopeModalProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    onOpen();
    // Animation will trigger, then AnimatePresence will handle unmount
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <MuiBox
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(5px)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Main Container */}
          <MuiBox
            sx={{
              position: 'relative',
              width: { xs: '90%', sm: '480px' },
              height: '280px', // The height of the closed envelope body
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Instructional Tooltip */}
            {!isOpening && (
              <MuiBox
                component={motion.div}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                sx={{
                  position: 'absolute',
                  top: -200, // Above the top flap
                  textAlign: 'center',
                  color: 'white',
                  zIndex: 10,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-comfortaa)',
                    fontSize: '0.9rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    mb: 1,
                  }}
                >
                  Toca para abrir
                </Typography>
                <Icon icon="ph:arrow-up-light" width="24" height="24" />
              </MuiBox>
            )}

            {/* Layer 1: Envelope Back & Top Flap */}
            <MuiBox
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: '#f5efe6',
                borderRadius: '0 0 12px 12px',
                zIndex: 1,
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                '&::before': { // Top Flap (pointing up)
                  content: '""',
                  position: 'absolute',
                  top: -130,
                  left: 0,
                  width: '100%',
                  height: '131px', // Solapado 1px para eliminar la línea negra (gap)
                  bgcolor: '#f5efe6',
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                }
              }}
            />

            {/* Layer 2: Invitation Card (Animated) */}
            <MuiBox
              component={motion.div}
              layoutId="invitation-card"
              initial={{ y: 0 }} // Starts at the top edge of the pocket
              animate={isOpening ? { 
                y: -1000, 
                opacity: 0,
                transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] } 
              } : { 
                y: [0, -20, 0], // Float up and down
                transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } 
              }}
              onAnimationComplete={() => {
                if (isOpening) setIsVisible(false);
              }}
              onClick={handleOpen}
              sx={{
                position: 'absolute',
                top: -80, // Peek out from the pocket
                width: '92%',
                height: '320px',
                bgcolor: 'white',
                backgroundImage: 'url("/home-textura-color-terracota.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                zIndex: 2,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'center',
                pt: 4,
                px: 3,
                // boxShadow: '0 10px 30px rgba(0,0,0,0.2)', // Eliminado temporalmente
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-comfortaa)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  fontWeight: 800,
                  mb: 2,
                  color: 'primary.main',
                  opacity: 0.8,
                }}
              >
                NOS CASAMOS
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'var(--font-cursive)',
                  fontSize: { xs: '2.5rem', sm: '3.2rem' },
                  color: 'terracotta.main',
                  lineHeight: 1,
                  mb: 2,
                }}
              >
                Nahuel & Melanie
              </Typography>

              <MuiBox sx={{ width: '40px', height: '1.5px', bgcolor: 'terracotta.main', opacity: 0.3, my: 1 }} />

              <Typography
                sx={{
                  fontFamily: 'var(--font-comfortaa)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.3em',
                  fontWeight: 700,
                  color: 'primary.main',
                  mt: 2,
                }}
              >
                1 DE MAYO 2026
              </Typography>
            </MuiBox>

            {/* Layer 3: Envelope Front Pocket */}
            <MuiBox
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: '#eadcc7',
                borderRadius: '0 0 12px 12px',
                zIndex: 3,
                pointerEvents: 'none',
                clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0% 100%)',
                // boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.1)', // Eliminado temporalmente
                '&::after': { // Sombras adicionales para el corte en V
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  // boxShadow: '0 -5px 15px rgba(0,0,0,0.05)', // Eliminado para quitar la línea negra
                  clipPath: 'polygon(0 0, 50% 50%, 100% 0)',
                  pointerEvents: 'none',
                }
              }}
            />
          </MuiBox>
        </MuiBox>
      )}
    </AnimatePresence>
  );
};

export default AnimatedEnvelopeModal;
