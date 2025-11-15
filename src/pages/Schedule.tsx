import { Box, Typography } from '@mui/material'
import { AlternateReverseTimeline } from '../components'
import { sectionBase, sectionInner, centerRow } from './styles'

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
        <Box sx={centerRow}>
          <AlternateReverseTimeline />
        </Box>
      </Box>
    </Box>
  )
}



