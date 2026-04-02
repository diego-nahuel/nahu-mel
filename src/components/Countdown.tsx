'use client';

import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

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

  if (!timeLeft) return (
    <Box sx={{ mt: 4, mb: 4, height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="body2" sx={{ opacity: 0.5 }}>Cargando cuenta regresiva...</Typography>
    </Box>
  );

  const Item = ({ value, label }: { value: number; label: string }) => (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 1.5, sm: 2 },
        minWidth: { xs: 70, sm: 100 },
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(142, 166, 144, 0.2)',
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          color: 'primary.main',
          fontWeight: 700,
          fontSize: { xs: '2rem', sm: '2.5rem' },
          fontFamily: '"Montserrat", sans-serif',
        }}
      >
        {value.toString().padStart(2, '0')}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          textTransform: 'uppercase',
          letterSpacing: 1,
          color: 'text.secondary',
        }}
      >
        {label}
      </Typography>
    </Paper>
  );

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Item value={timeLeft.days} label="Días" />
        </Grid>
        <Grid item>
          <Item value={timeLeft.hours} label="Horas" />
        </Grid>
        <Grid item>
          <Item value={timeLeft.minutes} label="Min" />
        </Grid>
        <Grid item>
          <Item value={timeLeft.seconds} label="Seg" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Countdown;
