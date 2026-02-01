import type { SxProps, Theme } from '@mui/material/styles'

export const formContainer: SxProps<Theme> = {
  px: { xs: 3, md: 0 },
  width: '100%',
}

export const formBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  maxWidth: '500px',
  mx: 'auto',
  width: '100%',
}

export const alertBox: SxProps<Theme> = {
  mb: 2,
}

export const textField: SxProps<Theme> = {
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

export const helperTextProps = {
  sx: { fontSize: '0.7rem', mt: 0 },
}

export const checkboxContainer: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
}

export const errorText: SxProps<Theme> = {
  display: 'block',
  fontSize: '0.7rem',
}

export const submitButton = {
  borderRadius: '30px',
  border: '1px solid black',
  minWidth: '150px',
  color: 'black',
  backgroundColor: '#FAFAFA',
}

export const submitButtonSx: SxProps<Theme> = {
  mt: 1,
}

export const loadingSpinner: SxProps<Theme> = {
  mr: 1,
  color: 'black',
}

export const checkbox: SxProps<Theme> = {
  backgroundColor: '#FAFAFA',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#F0F0F0',
  },
}
