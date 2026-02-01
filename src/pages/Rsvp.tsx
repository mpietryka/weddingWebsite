import { Box, Typography, Divider } from '@mui/material'
import {
  sectionBase,
  sectionInner,
  centerRow,
  pageTitle,
  pageDividerWithMargin,
} from './styles'
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
          <Typography variant="h4" component="h2" sx={pageTitle}>
            RSVP
          </Typography>
        </Box>
        <Divider sx={pageDividerWithMargin} />
        <RsvpForm />
      </Box>
    </Box>
  )
}


