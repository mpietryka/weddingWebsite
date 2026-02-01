import { Box, Typography, Divider } from '@mui/material'
import {
  sectionBase,
  sectionInner,
  centerRow,
  pageTitle,
  pageDivider,
  qaAccordionWrapper,
} from './styles'
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
          <Typography variant="h4" component="h2" sx={pageTitle}>
            Q&A
          </Typography>
        </Box>
        <Divider sx={pageDivider} />
        <Box sx={qaAccordionWrapper}>
          <QAAccordion items={qandaItems} />
        </Box>
      </Box>
    </Box>
  )
}
