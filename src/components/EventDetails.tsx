'use client';

import { Box, Typography, Button, Container, Divider } from '@mui/material';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const EventDetails = () => {
  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Nahuel+y+Melanie&dates=20260501T190000Z/20260502T050000Z&details=%C2%A1Los+esperamos+para+celebrar+nuestra+boda!&location=-24.604085,-65.381189";

  return (
    <Container 
      maxWidth="md" 
      sx={{ py: 8, textAlign: 'center' }}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ mb: 6 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography variant="h3" gutterBottom sx={{ color: 'primary.dark' }}>
            Cuándo
          </Typography>
        </motion.div>
        <Divider sx={{ width: '60px', mx: 'auto', mb: 4, height: '2px', bgcolor: 'terracotta.main' }} />
        
        <Box 
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 4 }}
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h5">Viernes 1 de Mayo</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h5">16:00 Horas</Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          component={motion.a}
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          sx={{
            bgcolor: 'terracotta.main',
            '&:hover': {
              bgcolor: '#d1856cff',
            },
            boxShadow: '0 4px 14px 0 rgba(229, 179, 187, 0.39)',
          }}
        >
          <Icon icon="mdi:calendar-heart" color='white' fontSize={24} style={{ marginRight: '6px', marginLeft: '-9px' }} />
          Agendar en Google Calendar
        </Button>
      </Box>
    </Container>
  );
};

export default EventDetails;
