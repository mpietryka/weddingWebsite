import type { SxProps, Theme } from '@mui/material'

export const appBarStyle = {
  backgroundColor: '#F5F5F4',
  boxShadow: 'none',
  color: 'black',
}

export const titleText: SxProps<Theme> = {
  marginTop: '16px',
  fontSize: { xs: 'h4.fontSize', md: 'h3.fontSize' },
}

export const toolbarStyle: SxProps<Theme> = {
  alignItems: 'center',
  bgcolor: '#F5F5F4',
  py: -1,
  px: 1,
  justifyContent: 'center',
}

export const navContainer: SxProps<Theme> = {
  display: 'flex',
  gap: 0.5,
}

export const navButton: SxProps<Theme> = {
  fontWeight: 400,
}
