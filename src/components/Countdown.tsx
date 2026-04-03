'use client';

import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const calculateTimeLeft = useCallback(() => {
    // Target: May 1st, 2026 at 16:00 (Argentina Time: GMT-3)
    // 16:00 GMT-3 is 19:00 UTC
    const targetDate = new Date('2026-05-01T19:00:00Z').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft) return null;

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
          fontWeight: 200,
          fontFamily: 'serif',
          lineHeight: 1,
          mb: 1,
        }}
      >
        {value.toString().padStart(2, '0')}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          fontSize: { xs: '0.6rem', sm: '0.7rem' },
          opacity: 0.8,
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        py: 10,
        backgroundImage: 'url("/home-textura-color-terracota.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'var(--font-cursive), cursive',
            fontSize: { xs: '2.5rem', sm: '3.5rem' },
            mb: 4,
          }}
        >
          Faltan
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Grid item xs={3}>
            <TimeUnit value={timeLeft.days} label="Días" />
          </Grid>
          <Grid item xs={3}>
            <TimeUnit value={timeLeft.hours} label="Hrs" />
          </Grid>
          <Grid item xs={3}>
            <TimeUnit value={timeLeft.minutes} label="Min" />
          </Grid>
          <Grid item xs={3}>
            <TimeUnit value={timeLeft.seconds} label="Seg" />
          </Grid>
        </Grid>

        <Typography
          variant="h3"
          sx={{
            fontFamily: 'var(--font-cursive), cursive',
            fontSize: { xs: '2.5rem', sm: '3.5rem' },
            mt: 4,
          }}
        >
          para nuestra boda
        </Typography>
      </Container>
    </Box>
  );
};

export default Countdown;
