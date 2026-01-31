import { Box, Typography, Divider } from '@mui/material'
import { sectionBase, sectionInner, centerRow } from './styles'
import RsvpForm from '../components/RsvpForm'

export default function Rsvp() {
  return (
    <Box
      id="rsvp"
      component="section"
      sx={{...sectionBase, minHeight: '95vh', px: { xs: '16px', md: 0 }}}
    >
      <Box sx={sectionInner}>
        <Box sx={centerRow}>
          <Typography variant="h4" component="h2" sx={{fontWeight: 500}}>
            RSVP
          </Typography>
        </Box>
        <Divider sx={{ width: '100%', borderColor: 'rgba(0, 0, 0, 0.12)', marginBottom: 2 }} />
        <RsvpForm />
      </Box>
    </Box>
  )
}


