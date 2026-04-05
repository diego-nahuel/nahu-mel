'use client';

import { Box, Typography, Container, Paper, Button, Divider } from '@mui/material';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const customMapStyles = [
  // 1. Ocultamos los íconos y textos de los lugares (para que quede limpio)
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'transit',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  // 2. PERO forzamos a que las siluetas (geometrías) de los edificios importantes sí se vean
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#dfd3c3' }, { visibility: 'on' }],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [{ color: '#dfd3c3' }, { visibility: 'on' }],
  },
  // 3. Resto de tu diseño vintage
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#d6c9bd' }, { weight: 0.5 }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [{ color: '#f5f0e8' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#e2d4c8' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#c9e0d4' }],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{ color: '#fef7ed' }],
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#a69b8a' }],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#c0745a' }, { weight: 0.8 }],
  },
];

const LocationMap = () => {
  return (
    <Container
      maxWidth="lg"
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'primary.dark' }}>
          Dónde
        </Typography>
        <Divider
          sx={{ width: '60px', mx: 'auto', mb: 4, height: '2px', bgcolor: 'terracotta.main' }}
        />
        <Typography variant="h5" gutterBottom sx={{ color: 'terracotta.main', fontWeight: 800 }}>
          La Caldera
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: '600px', mx: 'auto', mb: 4 }}
        >
          Acompáñanos a celebrar este momento especial en el lugar donde comenzó nuestra historia de
          amor.
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
          <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
            <Box sx={{ width: '100%', height: 450, borderRadius: '8px 8px 0 0', overflow: 'hidden' }}>
              <Map
                defaultZoom={15.5}
                defaultCenter={{ lat: -24.604085, lng: -65.381189 }}
                gestureHandling="greedy"
                disableDefaultUI={true}
                keyboardShortcuts={false}
                fullscreenControl={true}
                fullscreenControlOptions={{
                  position: typeof google !== 'undefined' ? google.maps.ControlPosition.BOTTOM_RIGHT : 9
                }}
                styles={customMapStyles}
              >
                <Marker
                  position={{ lat: -24.604085, lng: -65.381189 }}
                  icon={{
                    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                    fillColor: '#C0745A',
                    fillOpacity: 1,
                    strokeWeight: 1,
                    strokeColor: '#ffffff',
                    scale: 1.8,
                    anchor: typeof google !== 'undefined' ? new google.maps.Point(12, 21) : undefined
                  }}
                />
              </Map>
            </Box>
            <Box sx={{ py: 1.5, bgcolor: '#fdfbf7', borderTop: '1px solid #eee' }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: 'var(--font-comfortaa), sans-serif',
                  color: 'text.secondary',
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                Av. Gral. Güemes s/n, La Caldera, Salta
              </Typography>
            </Box>
          </APIProvider>
        </Paper>

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            component={motion.a}
            href="https://maps.google.com/?q=-24.604085,-65.381189"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              bgcolor: '#C0745A',
              color: 'white',
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              '&:hover': { bgcolor: '#d1856cff' },
              boxShadow: '0 4px 14px rgba(192, 116, 90, 0.3)',
            }}
          >
            <Icon
              icon="carbon:location-heart-filled"
              color="white"
              fontSize={24}
              style={{ marginRight: '6px', marginLeft: '-9px' }}
            />
            Cómo llegar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LocationMap;