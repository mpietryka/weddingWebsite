import { Box, Typography } from '@mui/material'
import { sectionBase, sectionInner, centerRow } from './styles'
import RsvpForm from '../components/RsvpForm'

export default function Rsvp() {
  return (
    <Box
      id="rsvp"
      component="section"
      sx={{...sectionBase, minHeight: '95vh'}}
    >
      <Box sx={sectionInner}>
        <Box sx={centerRow}>
          <Typography variant="h4" component="h2" sx={{fontWeight: 500}}>
            RSVP
          </Typography>
        </Box>
        <RsvpForm />
      </Box>
    </Box>
  )
}


