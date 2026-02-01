import type { SxProps, Theme } from '@mui/material/styles'

// Home page styles
export const homePhotoCarouselWrapper: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  px: { xs: 0, md: 4, lg: 8 },
}

export const homePhotoCarouselContainer: SxProps<Theme> = {
  width: '100%',
  maxWidth: { xs: '100%', md: '600px', lg: '700px' },
}

export const homeDateWrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: '10px',
}

export const homeDateTitle: SxProps<Theme> = {
  fontWeight: 500,
  textAlign: 'center',
}

export const homeDateSubtitle: SxProps<Theme> = {
  fontWeight: 300,
  textAlign: 'center',
  marginBottom: '8px',
}

export const homeCountdownWrapper: SxProps<Theme> = {
  marginBottom: '10px',
}

export const homeRsvpButtonWrapper: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
}

export const homeRsvpButton: SxProps<Theme> = {
  borderRadius: '30px',
  border: '1px solid black',
  minWidth: '80px',
  color: 'black',
  backgroundColor: '#FAFAFA',
}

// Schedule page styles
export const scheduleContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  width: '100%',
}

export const scheduleDate: SxProps<Theme> = {
  fontWeight: 300,
  textAlign: 'center',
}

export const scheduleDivider: SxProps<Theme> = {
  width: '100%',
  borderColor: 'rgba(0, 0, 0, 0.12)',
  marginBottom: 4,
}

// QA page styles
export const qaAccordionWrapper: SxProps<Theme> = {
  width: '100%',
  maxWidth: '800px',
  mt: 3,
}

// Common page styles
export const pageTitle: SxProps<Theme> = {
  fontWeight: 500,
}

export const pageDivider: SxProps<Theme> = {
  width: '100%',
  borderColor: 'rgba(0, 0, 0, 0.12)',
}

export const pageDividerWithMargin: SxProps<Theme> = {
  width: '100%',
  borderColor: 'rgba(0, 0, 0, 0.12)',
  marginBottom: 2,
}

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


