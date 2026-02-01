import type { SxProps, Theme } from '@mui/material'

export const accordionStyle: SxProps<Theme> = {
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  mb: 1,
}

export const accordionSummaryStyle: SxProps<Theme> = {
  borderRadius: '10px',
}

export const questionText: SxProps<Theme> = {
  fontWeight: 500,
}

export const answerText: SxProps<Theme> = {
  color: 'text.secondary',
}
