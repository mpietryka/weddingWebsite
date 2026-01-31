import type { SxProps, Theme } from '@mui/material/styles'

export const timelineCard: SxProps<Theme> = {
  boxShadow: '0 8px 24px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.12)',
  borderRadius: '10px',
  padding: { xs: '10px', md: '16px' },
  backgroundColor: 'white',
  textAlign: 'justify',
}

export const rsvpTextField: SxProps<Theme> = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    backgroundColor: '#FAFAFA',
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
}

export const rsvpButton = {
  borderRadius: '30px',
  border: '1px solid black',
  minWidth: '150px',
  color: 'black',
  backgroundColor: '#FAFAFA',
}

export const rsvpCheckbox: SxProps<Theme> = {
  backgroundColor: '#FAFAFA',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#F0F0F0',
  },
}
