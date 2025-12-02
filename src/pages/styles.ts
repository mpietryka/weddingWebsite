import type { SxProps, Theme } from '@mui/material/styles'

export const sectionBase: SxProps<Theme> = {
  textAlign: 'left',
  minHeight: '100vh',
  scrollMarginTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  pt: 4,
  backgroundColor: '#F5F5F4',
  width: '100%',
}

export const sectionInner: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  width: '100%',
  maxWidth: { xs: '100%', lg: '70%' },
  mx: 'auto',
}

export const centerRow: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'start',
  marginLeft: { xs: "18px", md: '0px', lg: '0px' },
  marginBottom: { xs: "5px", md: '0px', lg: '0px' }
}


