'use client';

import { Box, Typography, Container, Divider } from '@mui/material';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const DressCodeSection = () => {
  return (
    <Box sx={{ pb: { xs: 6, md: 8 }, textAlign: 'center' }}>
      <Container maxWidth="sm">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
            Código de Vestimenta
          </Typography>

          <Divider
            sx={{
              width: '60px',
              mx: 'auto',
              mb: 4,
              height: '2px',
              bgcolor: 'terracotta.main',
            }}
          />

          {/* Icons row */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              gap: { xs: 3, sm: 5 },
              mb: 4,
            }}
          >
            {/* Vestido */}
            <Box
              component={motion.div}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              sx={{ textAlign: 'center' }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  bgcolor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 1,
                  boxShadow: '0 4px 14px rgba(192, 116, 90, 0.15)',
                  border: '1px solid rgba(192, 116, 90, 0.1)',
                }}
              >
                <Icon
                  icon="mdi:hanger"
                  fontSize={36}
                  color="#C0745A"
                />
              </Box>
            </Box>

            {/* Traje */}
            <Box
              component={motion.div}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              sx={{ textAlign: 'center' }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  bgcolor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 1,
                  boxShadow: '0 4px 14px rgba(192, 116, 90, 0.15)',
                  border: '1px solid rgba(192, 116, 90, 0.1)',
                }}
              >
                <Icon
                  icon="mdi:tshirt-crew"
                  fontSize={36}
                  color="#C0745A"
                />
              </Box>
            </Box>
          </Box>

          {/* Dress code label */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              bgcolor: 'white',
              py: 1.5,
              px: 4,
              borderRadius: '60px',
              boxShadow: '0 4px 14px rgba(192, 116, 90, 0.12)',
              border: '1px solid rgba(192, 116, 90, 0.1)',
            }}
          >
            <Icon icon="mdi:star-four-points" fontSize={20} color="#C0745A" />
            <Typography
              sx={{
                fontFamily: 'var(--font-comfortaa), sans-serif',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'text.primary',
                letterSpacing: 1,
                textTransform: 'uppercase',
              }}
            >
              Elegante Sport
            </Typography>
            <Icon icon="mdi:star-four-points" fontSize={20} color="#C0745A" />
          </Box>

          <Typography
            variant="body2"
            sx={{
              mt: 3,
              color: 'text.secondary',
              maxWidth: '380px',
              mx: 'auto',
              lineHeight: 1.7,
              opacity: 0.8,
            }}
          >
            Te invitamos a vestirte cómodo y elegante para disfrutar de nuestra celebración.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DressCodeSection;
