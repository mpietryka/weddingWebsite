import type { SxProps, Theme } from '@mui/material'

export const countdownContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
}

export const timeBlockContainer: SxProps<Theme> = {
  textAlign: 'center',
  minWidth: 72,
}

export const timeBlockValue: SxProps<Theme> = {
  fontSize: 12,
  lineHeight: 1.2,
}

export const timeBlockLabel: SxProps<Theme> = {
  fontSize: 12,
  lineHeight: 1.2,
}

export const separatorText: SxProps<Theme> = {
  lineHeight: 1,
  fontSize: 12,
}
