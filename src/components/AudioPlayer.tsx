'use client';

import { useState, useRef } from 'react';
import { Box, Button, Typography, Fade, Backdrop } from '@mui/material';
import { Icon } from '@iconify/react';

const AudioPlayer = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startInvitation = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio playback failed", err));
      setShowOverlay(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/soundtrack-web.mp3"
        loop
        style={{ display: 'none' }}
      />

      {/* Elegant Modal Invitation */}
      <Backdrop
        open={showOverlay}
        sx={{
          zIndex: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Fade in={showOverlay} timeout={1200}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: 480,
              width: '100%',
              backgroundColor: '#fdfcf8', // Elegant cream
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/handmade-paper.png")', // Realistic paper texture
              borderRadius: '24px',
              padding: { xs: 4, sm: 6 },
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(142, 166, 144, 0.1) inset',
              border: '1px solid rgba(142, 166, 144, 0.2)',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 10,
                left: 10,
                right: 10,
                bottom: 10,
                border: '1px solid rgba(142, 166, 144, 0.3)',
                borderRadius: '18px',
                pointerEvents: 'none',
              }
            }}
          >
            {/* Decorative Icon */}
            <Box sx={{ mb: 3 }}>
              <Icon 
                icon="mdi:music-note-outline" 
                width={32} 
                style={{ color: '#8ea690', opacity: 0.6 }} 
              />
            </Box>

            <Typography
              variant="h3"
              sx={{
                mb: 1,
                color: '#5d6d5e',
                fontFamily: 'var(--font-cursive), cursive',
                fontSize: { xs: '2.5rem', sm: '3.5rem' },
                fontWeight: 600,
              }}
            >
              Nahuel & Melanie
            </Typography>

            <Typography
              sx={{
                mb: 5,
                color: '#8ea690',
                fontFamily: 'var(--font-comfortaa), sans-serif',
                fontSize: '1.1rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              ¡Nos Casamos!
            </Typography>

            <Typography
              sx={{
                mb: 5,
                color: '#666',
                fontFamily: 'var(--font-comfortaa), sans-serif',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}
            >
              "Te invitamos a ser parte de nuestra historia. <br />
              Haz clic para entrar."
            </Typography>

            <Button
              variant="contained"
              onClick={startInvitation}
              size="large"
              fullWidth
              sx={{
                py: 2,
                fontSize: '1rem',
                bgcolor: '#8ea690',
                color: 'white',
                '&:hover': { 
                  bgcolor: '#7a917c',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(142, 166, 144, 0.4)',
                },
                borderRadius: '12px',
                fontFamily: 'var(--font-comfortaa), sans-serif',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(142, 166, 144, 0.3)',
                fontWeight: 600,
              }}
            >
              Abrir Invitación
            </Button>
          </Box>
        </Fade>
      </Backdrop>

      {/* Floating Control Button (Visible after opening) */}
      {!showOverlay && (
        <Fade in={true}>
          <Box
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button
              onClick={toggleMute}
              sx={{
                minWidth: 'auto',
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                border: '1px solid rgba(142, 166, 144, 0.2)',
                '&:hover': { bgcolor: 'white' },
              }}
            >
              <Icon
                icon={isMuted ? "mdi:volume-off" : "mdi:volume-high"}
                width={24}
                height={24}
                style={{ color: '#8ea690' }}
              />
            </Button>
          </Box>
        </Fade>
      )}
    </>
  );
};

export default AudioPlayer;
