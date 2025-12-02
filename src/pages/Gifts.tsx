import { Box, Typography } from '@mui/material'
import { centerRow, sectionBase, sectionInner } from './styles'

export default function Gifts() {
  return (
    <Box
      id="gifts"
      component="section"
      sx={sectionBase}
    >
      <Box sx={sectionInner}>
          <Box sx={centerRow}>
          <Typography variant="h3" component="h2">
            Gifts
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
