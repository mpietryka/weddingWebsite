import { Box, Typography } from '@mui/material'
import { sectionBase, sectionInner } from './styles'

export default function Gifts() {
  return (
    <Box
      id="gifts"
      component="section"
      sx={sectionBase}
    >
      <Box sx={sectionInner}>
        <Typography variant="h3" component="h2">
          Gifts
        </Typography>
      </Box>
    </Box>
  )
}
