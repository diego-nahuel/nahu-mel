'use client';

import { Box, Typography, Container, Paper, Button, Divider } from '@mui/material';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const LocationMap = () => {
  return (
    <Container 
      maxWidth="lg"
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'primary.dark' }}>
          Dónde
        </Typography>
        <Divider sx={{ width: '60px', mx: 'auto', mb: 4, height: '2px', bgcolor: 'terracotta.main' }} />
        <Typography variant="h5" gutterBottom sx={{ color: 'terracotta.main', fontWeight: 800 }}>
          La Caldera
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
          Acompáñanos a celebrar este momento especial en el lugar donde comenzó nuestra historia de amor.
        </Typography>
        
        <Paper
          elevation={4}
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: '0 12px 24px -10px rgba(142, 166, 144, 0.4)',
            border: '8px solid white',
          }}
        >
          <iframe 
            src="https://maps.google.com/maps?q=-24.604085,-65.381189&hl=es&z=15&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0, display: 'block' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de la Boda"
          ></iframe>
        </Paper>

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            component={motion.a}
            href="https://www.google.com/maps/search/?api=1&query=-24.604085,-65.381189"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // startIcon={<Icon icon="carbon:location-heart-filled" />}
            sx={{
              bgcolor: '#C0745A',
              color: 'white',
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#d1856cff',
              },
              boxShadow: '0 4px 14px rgba(192, 116, 90, 0.3)',
            }}
          >
            <Icon icon="carbon:location-heart-filled" color='white' fontSize={24} style={{ marginRight: '6px', marginLeft: '-9px' }} />
            Cómo llegar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LocationMap;
