'use client';

import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const RSVPSection = () => {
  const whatsappUrl = "https://wa.me/5493874062806?text=Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20boda%20de%20Nahuel%20y%20Melanie%20%E2%9D%A4%EF%B8%8F";

  return (
    <Box sx={{ bgcolor: '#fcf3ee', py: 10, textAlign: 'center' }}>
      <Container maxWidth="sm">
        {/* RSVP Section */}
        <Box 
          sx={{ mb: 8 }}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'var(--font-cursive), cursive',
              color: 'terracotta.main',
              mb: 2,
            }}
          >
            Asistencia
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'var(--font-comfortaa), sans-serif',
              color: 'text.secondary',
            }}
          >
            Esperamos que puedas acompañarnos.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'var(--font-comfortaa), sans-serif',
              color: 'text.secondary',
              mb: 4,
              fontWeight: 600,
            }}
          >
            Confirmar hasta el 15 de Abril
          </Typography>

          <Button
            component={motion.a}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              bgcolor: 'terracotta.main',
              '&:hover': {
                bgcolor: '#a95e4a',
              },
              borderRadius: '30px',
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              boxShadow: '0 4px 14px 0 rgba(192, 116, 90, 0.4)',
            }}
          >
            <Icon icon="mdi:whatsapp" style={{ fontSize: 24, marginRight: 8 }} />
            Confirmar Asistencia
          </Button>
        </Box>

        {/* Adult Only Message */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          sx={{
            maxWidth: '450px',
            mx: 'auto',
            p: 4,
            borderTop: '0.5px solid rgba(192, 116, 90, 0.2)',
          }}
        >
          <Icon 
            icon="tabler:rating-18-plus" 
            style={{ 
              fontSize: 50, 
              color: '#C0745A', 
              marginBottom: 16,
            }} 
          />
          
          <Typography
            sx={{
              fontFamily: 'var(--font-comfortaa), sans-serif',
              fontSize: '0.95rem',
              color: '#1A1A1A',
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            "Con mucho cariño, hemos decidido que este sea un evento solo para adultos. ¡Gracias por entender y ser parte de nuestro día!"
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default RSVPSection;
