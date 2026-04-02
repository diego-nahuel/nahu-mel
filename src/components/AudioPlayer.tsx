'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Button, IconButton, Typography, Fade } from '@mui/material';
import { Icon } from '@iconify/react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startInvitation = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio playback failed", err));
      setIsPlaying(true);
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

      {/* Overlay for Autoplay Bypass */}
      <Fade in={showOverlay} timeout={1000} unmountOnExit>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'background.default',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(rgba(253, 252, 248, 0.9), rgba(253, 252, 248, 0.9)), url("https://www.transparenttextures.com/patterns/natural-paper.png")',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              color: 'primary.main',
              textAlign: 'center',
              px: 3,
              fontFamily: 'var(--font-cursive), cursive',
              fontSize: { xs: '3rem', sm: '4.5rem' },
            }}
          >
            Bienvenidos a la Invitación
          </Typography>
          <Button
            variant="contained"
            onClick={startInvitation}
            size="large"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              borderRadius: '50px',
              fontFamily: 'var(--font-montserrat)',
              boxShadow: '0 10px 20px rgba(142, 166, 144, 0.3)',
            }}
          >
            Abrir Invitación
          </Button>
        </Box>
      </Fade>

      {/* Floating Control Button */}
      {!showOverlay && (
        <Fade in={true}>
          <IconButton
            onClick={toggleMute}
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 1000,
              bgcolor: 'background.paper',
              boxShadow: 3,
              '&:hover': { bgcolor: 'background.paper', opacity: 0.9 },
              width: 56,
              height: 56,
            }}
          >
            <Icon
              icon={isMuted ? "mdi:volume-off" : "mdi:volume-high"}
              width={32}
              height={32}
              style={{ color: '#8ea690' }}
            />
          </IconButton>
        </Fade>
      )}
    </>
  );
};

export default AudioPlayer;
