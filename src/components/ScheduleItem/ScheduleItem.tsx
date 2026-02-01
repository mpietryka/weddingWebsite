import { Box, Typography, Link } from '@mui/material'
import {
  itemContainer,
  timeSection,
  timeText,
  contentSection,
  titleText,
  descriptionText,
  subsectionContainer,
  subsectionLink,
  subsectionText,
  mainLink,
} from './ScheduleItem.style'

interface Subsection {
  icon?: React.ReactNode
  text: string
  link?: string
}

interface ScheduleItemProps {
  time: string
  title: string
  description?: string
  subsections?: Subsection[]
  link?: {
    url: string
    text: string
  }
}

export default function ScheduleItem({ time, title, description, subsections, link }: ScheduleItemProps) {
  return (
    <Box sx={itemContainer}>
      <Box sx={timeSection}>
        <Typography variant="body2" sx={timeText}>
          {time}
        </Typography>
      </Box>

      <Box sx={contentSection}>
        <Typography variant="body1" sx={titleText}>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" sx={descriptionText}>
            {description}
          </Typography>
        )}
        {subsections && subsections.map((subsection, index) => (
          <Box key={index} sx={subsectionContainer}>
            {subsection.icon}
            {subsection.link ? (
              <Link
                href={subsection.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={subsectionLink}
              >
                {subsection.text}
              </Link>
            ) : (
              <Typography variant="body2" sx={subsectionText}>
                {subsection.text}
              </Typography>
            )}
          </Box>
        ))}
        {link && (
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={mainLink}
          >
            {link.text}
          </Link>
        )}
      </Box>
    </Box>
  )
}
