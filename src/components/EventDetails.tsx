'use client';

import { Box, Typography, Button, Container, Divider } from '@mui/material';
import { Icon } from '@iconify/react';

const EventDetails = () => {
  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Nahuel+y+Melanie&dates=20260501T190000Z/20260502T050000Z&details=%C2%A1Los+esperamos+para+celebrar+nuestra+boda!&location=-24.604085,-65.381189";

  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'primary.dark' }}>
          Cuándo y Dónde
        </Typography>
        <Divider sx={{ width: '60px', mx: 'auto', mb: 4, height: '2px', bgcolor: 'secondary.main' }} />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Icon icon="mdi:calendar-heart" width={32} height={32} style={{ color: '#8ea690' }} />
            <Typography variant="h5">Viernes, 1 de Mayo de 2026</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Icon icon="mdi:clock-outline" width={32} height={32} style={{ color: '#8ea690' }} />
            <Typography variant="h5">16:00 Horas</Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          component="a"
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<Icon icon="mdi:calendar-plus" />}
          sx={{
            bgcolor: 'secondary.main',
            '&:hover': {
              bgcolor: 'secondary.dark',
            },
            boxShadow: '0 4px 14px 0 rgba(229, 179, 187, 0.39)',
          }}
        >
          Agendar en Google Calendar
        </Button>
      </Box>
    </Container>
  );
};

export default EventDetails;
