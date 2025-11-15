import type { SxProps, Theme } from '@mui/material/styles'

export const sectionBase: SxProps<Theme> = {
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  scrollMarginTop: { xs: '56px', sm: '64px' },
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
  p: 5,
}

export const sectionInner: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  width: '100%',
  maxWidth: 900,
}

export const centerRow: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
}


