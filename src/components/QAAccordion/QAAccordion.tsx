import { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { accordionStyle, accordionSummaryStyle, questionText, answerText } from './QAAccordion.style'

interface QAItem {
  question: string
  answer: string | React.ReactNode
}

interface QAAccordionProps {
  items: QAItem[]
}

export default function QAAccordion({ items }: QAAccordionProps) {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box>
      {items.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={accordionSummaryStyle}
          >
            <Typography sx={questionText}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" sx={answerText}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}
