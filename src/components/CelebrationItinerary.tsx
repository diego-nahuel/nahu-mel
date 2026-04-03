'use client';

import { useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@mui/lab';
import { Icon } from '@iconify/react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const itineraryItems = [
  {
    time: '16 hs',
    title: 'Recepción de Invitados',
    icon: 'mdi:human-greeting',
  },
  {
    time: '17 hs',
    title: 'Ceremonia',
    icon: 'mdi:church',
  },
  {
    time: '18 hs',
    title: 'Ágape & Hora del Té',
    icon: 'mdi:coffee',
  },
  {
    time: '19 hs',
    title: 'Fin de la Celebración',
    icon: 'mdi:heart',
  },
];

const CelebrationItinerary = () => {
  const containerRef = useRef(null);
  
  // Progress tracking for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box
      ref={containerRef}
      sx={{
        py: 10,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontFamily: 'var(--font-cursive), cursive',
            color: 'terracotta.main',
            mb: 8,
          }}
        >
          Te compartimos los detalles de la celebración
        </Typography>

        <Box sx={{ position: 'relative' }}>
          {/* Custom Progress Track (Background) */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '29px', sm: '29px' }, // Center of the 60px dot
              top: '30px', // Center of first dot
              bottom: '30px', // Center of last dot
              width: '4px',
              bgcolor: 'rgba(192, 116, 90, 0.15)', // Very light terracotta
              borderRadius: '2px',
            }}
          />

          {/* Custom Progress Line (Active) */}
          <motion.div
            style={{
              position: 'absolute',
              left: '29px',
              top: '30px',
              bottom: '30px',
              width: '4px',
              backgroundColor: '#C0745A',
              borderRadius: '2px',
              scaleY,
              originY: 0,
            }}
          />

          <Timeline 
            position="right"
            sx={{
              p: 0,
              m: 0,
              '& .MuiTimelineItem-root:before': {
                display: 'none', // Left alignment for all screen sizes
              }
            }}
          >
            {itineraryItems.map((item, index) => (
              <TimelineItem key={index} sx={{ minHeight: '120px', alignItems: 'center' }}>
                <TimelineSeparator sx={{ minWidth: '60px' }}>
                  {/* Node wrapping */}
                  <TimelineNodeWrapper index={index} time={item.time} scrollYProgress={scrollYProgress} totalItems={itineraryItems.length} />
                  
                  {/* We use the custom absolute line instead of the default Connector for more control, 
                      but we keep the separator to manage spacing */}
                </TimelineSeparator>

                <TimelineContent 
                  sx={{ 
                    py: '12px', 
                    px: 4,
                    display: 'flex', 
                    alignItems: 'center',
                    textAlign: 'left'
                  }}
                >
                  <TimelineContentWrapper index={index} icon={item.icon} title={item.title} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};

// Helper component for the dot animation
const TimelineNodeWrapper = ({ index, time, scrollYProgress, totalItems }: any) => {
  const threshold = index / (totalItems - 1);
  
  // Transform scale based on progress
  const scale = useTransform(
    scrollYProgress,
    [threshold - 0.1, threshold, threshold + 0.1],
    [0.9, 1.1, 1]
  );

  // Path length for the circular border animation
  const pathLength = useTransform(
    scrollYProgress,
    [threshold - 0.05, threshold],
    [0, 1]
  );

  // Hide the border until it starts painting to avoid the "round cap" dot appearing early
  const opacity = useTransform(pathLength, [0, 0.01], [0, 1]);
  
  return (
    <motion.div
      style={{
        scale,
        zIndex: 2,
        position: 'relative',
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Circle to hide the vertical line */}
      <Box
        sx={{
          position: 'absolute',
          width: 'calc(100% - 4px)', // Account for border width
          height: 'calc(100% - 4px)',
          borderRadius: '50%',
          bgcolor: '#fcf3ee', // Matches section background
          zIndex: 1,
          boxShadow: 2,
        }}
      />

      {/* SVG for the animated border */}
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'rotate(-90deg)', // Start drawing from the top
          zIndex: 2,
        }}
      >
        {/* Static Background Ring (Light) */}
        <circle
          cx="30"
          cy="30"
          r="28"
          stroke="rgba(192, 116, 90, 0.15)"
          strokeWidth="4"
          fill="none"
        />
        {/* Animated Progress Ring (Terracotta) */}
        <motion.circle
          cx="30"
          cy="30"
          r="28"
          stroke="#C0745A"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength,
            opacity,
          }}
        />
      </svg>

      <Typography
        sx={{
          position: 'relative',
          zIndex: 3,
          color: 'terracotta.main',
          fontWeight: 700,
          fontSize: '0.9rem',
          fontFamily: 'var(--font-comfortaa), sans-serif',
        }}
      >
        {time}
      </Typography>
    </motion.div>
  );
};

// Helper component for content animation
const TimelineContentWrapper = ({ icon, title }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0.3, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}
    >
      <Icon 
        icon={icon} 
        style={{ 
          fontSize: 32, 
          color: '#C0745A', 
          minWidth: 32,
          opacity: 0.9 
        }} 
      />
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'var(--font-comfortaa), sans-serif',
          fontSize: { xs: '1rem', sm: '1.2rem' },
          fontWeight: 600,
          color: 'text.primary',
          lineHeight: 1.3
        }}
      >
        {title}
      </Typography>
    </motion.div>
  );
};

export default CelebrationItinerary;
