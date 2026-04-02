'use client';

import { Box } from '@mui/material';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import EventDetails from '@/components/EventDetails';
import LocationMap from '@/components/LocationMap';
import AudioPlayer from '@/components/AudioPlayer';

export default function Home() {
  return (
    <Box component="main" sx={{ position: 'relative' }}>
      <AudioPlayer />
      <Hero />
      <Box sx={{ 
        py: 8, 
        textAlign: 'center', 
        bgcolor: 'background.default',
        background: 'linear-gradient(rgba(232, 240, 232, 0.9), rgba(232, 240, 232, 0.9)), url("https://www.transparenttextures.com/patterns/natural-paper.png")',
      }}>
        <Countdown />
      </Box>
      <EventDetails />
      <LocationMap />
      
      {/* Footer / Final Message */}
      <Box sx={{ py: 10, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
        <Box component="div" sx={{ mb: 2 }}>
          <Box
            component="span"
            sx={{
              fontFamily: 'var(--font-cursive), cursive',
              fontSize: '4.5rem',
              fontWeight: 400,
            }}
          >
            Nahuel & Melanie
          </Box>
        </Box>
        <Box component="p" sx={{ opacity: 0.8, letterSpacing: 2, textTransform: 'uppercase', fontSize: '0.9rem' }}>
          ¡Te esperamos para celebrar nuestro gran día!
        </Box>
      </Box>
    </Box>
  );
}
