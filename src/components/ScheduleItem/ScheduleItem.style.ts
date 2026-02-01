import type { SxProps, Theme } from '@mui/material'

export const itemContainer: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  maxWidth: '800px',
  gap: 2,
  alignItems: 'flex-start',
  mx: 'auto',
}

export const timeSection: SxProps<Theme> = {
  flex: { xs: '0 0 25%', md: 1 },
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 1,
}

export const timeText: SxProps<Theme> = {
  fontWeight: 200,
}

export const contentSection: SxProps<Theme> = {
  flex: { xs: '0 0 70%', md: 1 },
  display: 'flex',
  flexDirection: 'column',
  gap: 0.5,
}

export const titleText: SxProps<Theme> = {
  lineHeight: 1,
  fontWeight: 400,
  marginBottom: '1px',
}

export const descriptionText: SxProps<Theme> = {
  color: 'text.secondary',
}

export const subsectionContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 0.5,
  mt: 1,
}

export const subsectionLink: SxProps<Theme> = {
  fontSize: 'body2.fontSize',
  color: 'text.secondary',
  textDecoration: 'none',
  '&:hover': {
    color: 'text.primary',
  },
}

export const subsectionText: SxProps<Theme> = {
  color: 'text.secondary',
}

export const mainLink: SxProps<Theme> = {
  mt: 1,
  fontSize: 'body2.fontSize',
}
