'use client';

import { useState, useCallback } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Paper,
  Tooltip,
  Zoom,
  Snackbar,
  Alert,
  Fade
} from '@mui/material';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const CardCostSection = () => {
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const alias = "boda.nahuymel";

  const fallbackCopy = useCallback((text: string): boolean => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    let success = false;
    try {
      success = document.execCommand('copy');
    } catch {
      success = false;
    }
    document.body.removeChild(textarea);
    return success;
  }, []);

  const handleCopy = useCallback(async () => {
    // Prevenir múltiples copiados rápidos
    if (copied) return;

    let success = false;

    // Intentar con la Clipboard API primero
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(alias);
        success = true;
      } catch {
        // Clipboard API falló, intentar fallback
        success = fallbackCopy(alias);
      }
    } else {
      // Clipboard API no disponible, usar fallback directamente
      success = fallbackCopy(alias);
    }

    if (success) {
      setCopied(true);
      setSnackbarMessage('¡Alias copiado al portapapeles!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      setSnackbarMessage('No se pudo copiar. Copialo manualmente: ' + alias);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  }, [alias, copied, fallbackCopy]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCopy();
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: { xs: 6, md: 8 },
        textAlign: 'center'
      }}
    >
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
            mb: 3,
          }}
        >
          Costo de la Tarjeta
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: '24px',
            bgcolor: 'white',
            border: '1px solid rgba(192, 116, 90, 0.1)',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative background element */}
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              right: -20,
              opacity: 0.05,
              transform: 'rotate(15deg)',
            }}
          >
            <Icon icon="mdi:wallet-giftcard" fontSize={120} color="#C0745A" />
          </Box>

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-comfortaa), sans-serif',
                fontWeight: 700,
                color: 'text.primary',
                mb: 1,
                fontSize: { xs: '2.5rem', md: '3rem' }
              }}
            >
              $5.000
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                mb: 4,
                textTransform: 'uppercase',
                letterSpacing: 2,
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              por persona
            </Typography>

            <Box sx={{ mb: 4, px: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  mb: 2,
                  fontStyle: 'italic'
                }}
              >
                Puedes abonar en efectivo el mismo día de la boda o realizar la transferencia al siguiente alias:
              </Typography>

              <Tooltip
                title={copied ? "¡Alias copiado!" : "Copiar alias"}
                placement="top"
                TransitionComponent={Zoom}
                arrow
              >
                <Box
                  role="button"
                  tabIndex={0}
                  onClick={handleCopy}
                  onKeyDown={handleKeyDown}
                  aria-label="Copiar alias al portapapeles"
                  aria-live="polite"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    bgcolor: copied ? '#f0f7f0' : '#fdfbf7',
                    p: { xs: 1.5, sm: 2 },
                    px: { xs: 2.5, sm: 4 },
                    borderRadius: '60px',
                    border: `2px solid ${copied ? '#4caf50' : '#C0745A'}`,
                    borderStyle: 'solid',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: copied
                      ? '0 4px 12px rgba(76, 175, 80, 0.2)'
                      : '0 2px 4px rgba(0, 0, 0, 0.02)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: copied
                        ? '0 6px 16px rgba(76, 175, 80, 0.25)'
                        : '0 6px 16px rgba(192, 116, 90, 0.15)',
                      bgcolor: copied ? '#e8f5e8' : '#fff8f0',
                      borderColor: copied ? '#45a049' : '#B06A50',
                    },
                    '&:active': {
                      transform: 'scale(0.98)',
                    },
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Efecto de brillo al copiar */}
                  {copied && (
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0.6, scale: 0 }}
                      animate={{ opacity: 0, scale: 2 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        bgcolor: '#4caf50',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                  
                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: { xs: '1rem', sm: '1.2rem' },
                      fontWeight: 700,
                      color: copied ? '#2e7d32' : 'terracotta.main',
                      letterSpacing: 1,
                      transition: 'color 0.2s',
                    }}
                  >
                    {alias}
                  </Typography>
                  
                  <Box sx={{ position: 'relative', width: 24, height: 24 }}>
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0, opacity: 0, rotate: -180 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          exit={{ scale: 0, opacity: 0, rotate: 180 }}
                          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                          style={{ position: 'absolute' }}
                        >
                          <Icon icon="mdi:check-circle" color="#4caf50" fontSize={24} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ position: 'absolute' }}
                        >
                          <Icon icon="mdi:content-copy" color="#C0745A" fontSize={24} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>
                </Box>
              </Tooltip>
            </Box>
          </Box>
        </Paper>

        <Typography
          variant="body2"
          sx={{
            mt: 4,
            color: 'text.secondary',
            maxWidth: '400px',
            mx: 'auto',
            lineHeight: 1.6,
            opacity: 0.8
          }}
        >
          Por favor, recuerda enviar el comprobante de transferencia al confirmar tu asistencia.
        </Typography>
      </Box>

      {/* Snackbar para feedback adicional */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={Fade}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          icon={snackbarSeverity === 'success' ? <Icon icon="mdi:check-circle" /> : <Icon icon="mdi:alert-circle" />}
          sx={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            '& .MuiAlert-message': {
              fontFamily: 'var(--font-comfortaa), sans-serif',
            }
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CardCostSection;