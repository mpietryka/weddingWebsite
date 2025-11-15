import { Box, Typography } from '@mui/material'
import { sectionBase, sectionInner } from './styles'

export default function Rsvp() {
  return (
    <Box
      id="rsvp"
      component="section"
      sx={sectionBase}
    >
      <Box sx={sectionInner}>
        <Typography variant="h3" component="h2">
          RSVP
        </Typography>
      </Box>
    </Box>
  )
}


