'use client';

import { useEffect } from 'react';
import { Box } from '@mui/material';
import Hero from '@/components/Hero';
import Phrase from '@/components/Phrase';
import Countdown from '@/components/Countdown';
import EventDetails from '@/components/EventDetails';
import LocationMap from '@/components/LocationMap';
import AudioPlayer from '@/components/AudioPlayer';
import CelebrationItinerary from '@/components/CelebrationItinerary';
import CardCostSection from '@/components/CardCostSection';
import DressCodeSection from '@/components/DressCodeSection';
import RSVPSection from '@/components/RSVPSection';

export default function Home() {
  useEffect(() => {
    // Reset scroll to top on page reload/mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box component="main" sx={{ position: 'relative' }}>
      <AudioPlayer />
      <Hero />
      <Phrase />
      <Countdown />
      <Box 
        sx={{ 
          position: 'relative',
          bgcolor: '#fcf3ee',
          // Use pseudo-element for background to flip it horizontally but not the content
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/background-golden.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'repeat-y',
            transform: 'scaleX(-1)', // Horizontal flip across the Y-axis
            zIndex: 0,
            pointerEvents: 'none',
          },
          // Ensure children stay on top
          '& > *': {
            position: 'relative',
            zIndex: 1,
          },
        }}
      >
        <EventDetails />
        <LocationMap />
        <CelebrationItinerary />
      </Box>

      {/* Card Cost Section */}
      <CardCostSection />

      {/* Dress Code Section */}
      <DressCodeSection />

      {/* RSVP Section */}
      <RSVPSection />
      
      {/* Footer / Final Message */}
      <Box sx={{ pb: 10, pt: 5, textAlign: 'center', bgcolor: 'terracotta.main', color: 'white' }}>
        <Box component="div" sx={{ mb: 2 }}>
          <Box
            component="span"
            sx={{
              fontFamily: 'var(--font-cursive), cursive',
              fontSize: { xs: '3rem' },
              fontWeight: 700,
            }}
          >
            Nahuel & Melanie
          </Box>
        </Box>
        <Box component="p" sx={{ opacity: 0.8, letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.9rem', px: 5 }}>
          ¡Te esperamos para celebrar nuestro gran día!
        </Box>
      </Box>
    </Box>
  );
}
