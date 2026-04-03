'use client';

import { useState, useRef } from 'react';
import { Box, Button, Typography, Fade, Backdrop } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedEnvelopeModal from './AnimatedEnvelopeModal';

const AudioPlayer = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio playback failed", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const VinylIcon = () => (
    <Box
      component={motion.div}
      animate={{ rotate: isPlaying ? 360 : 0 }}
      transition={isPlaying ? {
        duration: 4, // Slightly slower, more natural
        repeat: Infinity,
        ease: "linear"
      } : {
        duration: 0.8,
        ease: "easeOut"
      }}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#SVGXv8lpc2Y)">
          {/* Main Record Body - Terracotta */}
          <path fill="#C0745A" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" />
          
          {/* Highlights/Reflections - Lighter Terracotta for a vinyl-like shimmer */}
          <path fill="#D4957D" opacity="0.6" d="M12 12L14.571 22.685C17.727 22.015 20.485 20.315 22.576 17.827C21.492 15.642 19.492 13.642 12 12Z" />
          <path fill="#D4957D" opacity="0.6" d="M12 12L9.43 1.315C6.274 1.985 3.516 3.685 1.424 6.173C2.508 8.358 4.508 10.358 12 12Z" />
          
          {/* Center Label - Creamy White (Invitation color) */}
          <circle cx="12" cy="12" r="2.391" fill="#fcf3ee" stroke="#5d5d5d" strokeWidth="0.5" />
          
          {/* Grooves - Dark Gray (Invitation primary color) */}
          <circle cx="12" cy="12" r="8.61" stroke="#5d5d5d" strokeWidth="0.5" opacity="0.3" />
          <circle cx="12" cy="12" r="6.695" stroke="#5d5d5d" strokeWidth="0.5" opacity="0.3" />
          <circle cx="12" cy="12" r="4.78" stroke="#5d5d5d" strokeWidth="0.5" opacity="0.3" />
          
          {/* Center Hole */}
          <circle cx="12" cy="12" r="0.4" fill="#5d5d5d" />
          
          {/* Outer Border */}
          <circle cx="12" cy="12" r="11" stroke="#5d5d5d" strokeWidth="1" />
        </g>
        <defs>
          <clipPath id="SVGXv8lpc2Y">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );

  return (
    <>
      <audio
        ref={audioRef}
        src="/soundtrack-web.mp3"
        loop
        style={{ display: 'none' }}
      />

      <AnimatedEnvelopeModal 
        onOpen={() => {
          if (audioRef.current) {
            audioRef.current.play().catch(err => console.log("Audio playback failed", err));
            setIsPlaying(true);
            setTimeout(() => {
              setShowButton(true);
            }, 15000);
          }
          setShowOverlay(false);
        }}
      />

      {/* Floating Control Button (Visible 5 seconds after starting) */}
      {showButton && (
        <Fade in={true} timeout={1000}>
          <Box
            className="floating-audio-control"
            sx={{
              position: 'fixed',
              bottom: 30,
              right: 30,
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button
              onClick={togglePlay}
              sx={{
                minWidth: 'auto',
                width: 60,
                height: 60,
                padding: 0,
                borderRadius: '50%',
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 30px rgba(192, 116, 90, 0.25)',
                border: '1.5px solid rgba(192, 116, 90, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': { 
                  bgcolor: 'white',
                  transform: 'scale(1.1)',
                  boxShadow: '0 12px 35px rgba(192, 116, 90, 0.35)',
                },
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              }}
            >
              <VinylIcon />
            </Button>
          </Box>
        </Fade>
      )}
    </>
  );
};

export default AudioPlayer;
