import { Box, Typography } from '@mui/material'
import { AlternateReverseTimeline } from '../components'
import { sectionBase, sectionInner } from './styles'

export default function Schedule() {
  return (
    <Box
      id="schedule"
      component="section"
      sx={sectionBase}
    >
      <Box sx={sectionInner}>
      <Typography variant="h3" component="h2">
          Schedule
        </Typography>
        <Typography variant="body1">Here's the plan for the day:</Typography>
      </Box>
      <Box sx={{...sectionInner, justifyContent: 'center', width: { xs: '100%', lg: '60%' }}}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            width: '100%',
          }}
        >
          <AlternateReverseTimeline />
        </Box>
      </Box>
    </Box>
  )
}



