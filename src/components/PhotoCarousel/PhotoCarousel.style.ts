import type { SxProps, Theme } from '@mui/material'

export const carouselContainer: SxProps<Theme> = {
  position: 'relative',
  width: '100%',
  paddingTop: '100%',
  overflow: 'hidden',
}

export const carouselImage: SxProps<Theme> = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  userSelect: 'none',
  pointerEvents: 'none',
}

export const dotsContainer: SxProps<Theme> = {
  position: 'absolute',
  bottom: '16px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '8px',
  zIndex: 2,
}

export const dotStyle = (isActive: boolean): SxProps<Theme> => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#fff',
    transform: 'scale(1.2)',
  },
})
