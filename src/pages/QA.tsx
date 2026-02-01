import { Box, Typography, Divider } from '@mui/material'
import { sectionBase, sectionInner, centerRow } from './styles'
import { QAAccordion } from '../components'
import { qandaItems } from '../data/qandaItems'

export default function QA() {
  return (
    <Box
      id="qa"
      component="section"
      sx={{...sectionBase, minHeight: '95vh', px: { xs: '16px', md: 0 }}}
    >
      <Box sx={sectionInner}>
        <Box sx={centerRow}>
          <Typography variant="h4" component="h2" sx={{fontWeight: 500}}>
            Q&A
          </Typography>
        </Box>
        <Divider sx={{ width: '100%', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
        <Box sx={{ width: '100%', maxWidth: '800px', mt: 3 }}>
          <QAAccordion items={qandaItems} />
        </Box>
      </Box>
    </Box>
  )
}
