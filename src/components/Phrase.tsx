'use client';

import { Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Phrase = () => {
  return (
    <Box
      sx={{
        bgcolor: 'terracotta.main',
        color: 'white',
        py: 10,
        px: 4,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Typography
        variant="h5"
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        sx={{
          maxWidth: '800px',
          fontWeight: 400,
          lineHeight: 1.6,
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
          fontFamily: 'var(--font-comfortaa), sans-serif',
        }}
      >
        "A veces lo que empieza como una locura se convierte en lo mejor de tu vida"
      </Typography>
      
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon 
          icon="mdi:heart" 
          width="24" 
          height="24" 
          style={{ color: 'white' }} 
        />
      </Box>
    </Box>
  );
};

export default Phrase;
