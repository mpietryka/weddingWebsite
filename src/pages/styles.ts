import type { SxProps, Theme } from '@mui/material/styles'

export const sectionBase: SxProps<Theme> = {
  textAlign: 'left',
  minHeight: '100vh',
  scrollMarginTop: '100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  pt: 2,
  backgroundColor: '#F5F5F4',
  width: '100%',
}

export const sectionInner: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1.5,
  width: '100%',
  maxWidth: { xs: '100%', lg: '60%' },
  mx: 'auto',
}

export const centerRow: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
}


