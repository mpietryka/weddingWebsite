import { Box, Typography } from '@mui/material'

export default function Rsvp() {
  return (
    <Box
      id="rsvp"
      component="section"
      sx={{
        minHeight: '100vh',
        scrollSnapAlign: 'start',
        scrollMarginTop: { xs: '56px', sm: '64px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Typography variant="h3" component="h2">
        RSVP
      </Typography>
    </Box>
  )
}


