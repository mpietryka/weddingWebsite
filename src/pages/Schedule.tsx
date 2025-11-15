import { Box, Typography } from '@mui/material'
import AlternateReverseTimeline from '../components/Timeline'

export default function Schedule() {
  return (
    <Box
      id="schedule"
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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 900 }}>
        <Typography variant="h3" component="h2">
          Schedule
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <AlternateReverseTimeline />
        </Box>
      </Box>
    </Box>
  )
}


