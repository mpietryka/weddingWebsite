import { Box, Typography, Link } from '@mui/material'

interface Subsection {
  icon?: React.ReactNode
  text: string
  link?: string
}

interface ScheduleItemProps {
  time: string
  title: string
  description?: string
  icon?: React.ReactNode
  subsections?: Subsection[]
  link?: {
    url: string
    text: string
  }
}

export default function ScheduleItem({ time, title, description, icon, subsections, link }: ScheduleItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '800px',
        gap: 2,
        alignItems: 'flex-start',
        mx: 'auto',
      }}
    >
      {/* Left side - Time */}
      <Box
        sx={{
          flex: { xs: '0 0 25%', md: 1 },
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {/* {icon} */}
        <Typography variant="body2" sx={{ fontWeight: 200 }}>
          {time}
        </Typography>
      </Box>

      {/* Right side - Content */}
      <Box
        sx={{
          flex: { xs: '0 0 70%', md: 1 },
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 400 }}>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        )}
        {subsections && subsections.map((subsection, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
            {subsection.icon}
            {subsection.link ? (
              <Link
                href={subsection.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: 'body2.fontSize',
                  color: 'text.secondary',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'text.primary'
                  }
                }}
              >
                {subsection.text}
              </Link>
            ) : (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
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
            sx={{ mt: 1, fontSize: 'body2.fontSize' }} 
          >
            {link.text}
          </Link>
        )}
      </Box>
    </Box>
  )
}
