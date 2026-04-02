'use client';

import { Box, Typography, Container, Paper } from '@mui/material';

const LocationMap = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'primary.dark' }}>
          Ubicación
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}>
          Acompáñanos a celebrar este momento especial en el lugar donde comenzará nuestra historia juntos.
        </Typography>
        
        <Paper
          elevation={4}
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
      </Box>
    </Container>
  );
};

export default LocationMap;
