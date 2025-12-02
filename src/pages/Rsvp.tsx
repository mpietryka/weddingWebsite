import { Box, Typography } from '@mui/material'
import { sectionBase, sectionInner, centerRow } from './styles'

export default function Rsvp() {
  return (
    <Box
      id="rsvp"
      component="section"
      sx={{...sectionBase, minHeight: '95vh'}}
    >
      <Box sx={sectionInner}>
        <Box sx={centerRow}>
          <Typography variant="h3" component="h2">
            RSVP
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}


