import type { SxProps, Theme } from '@mui/material/styles'

export const sectionBase: SxProps<Theme> = {
  textAlign: 'left',
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  scrollMarginTop: '40px',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  pt: 6,
  backgroundColor: '#F5F5F4',
}

export const sectionInner: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  width: '100%',
}

export const centerRow: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'start'
}


