import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { AlternateReverseTimeline, MobileTimeline } from '../components'
import { sectionBase, sectionInner, centerRow } from './styles'

export default function Schedule() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      id="schedule"
      component="section"
      sx={sectionBase}
    >
      <Box sx={sectionInner}>
        <Box sx={centerRow}>
          <Typography variant="h3" component="h2">
            Schedule
          </Typography>
        </Box>
        <Box sx={centerRow}>
          <Typography variant="body1">Here's the plan for the day:</Typography>
        </Box>
      </Box>
      <Box sx={{...sectionInner, justifyContent: 'center', width: { xs: '100%', lg: '60%' }}}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            width: '100%',
          }}
        >
          {isMobile ? <MobileTimeline /> : <AlternateReverseTimeline />}
        </Box>
      </Box>
    </Box>
  )
}



