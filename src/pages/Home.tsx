import { Box, Button, Typography } from '@mui/material'
import { useCallback } from 'react'
import { Countdown, PhotoCarousel } from '../components'
import {
  sectionBase,
  sectionInner,
  homePhotoCarouselWrapper,
  homePhotoCarouselContainer,
  homeDateWrapper,
  homeDateTitle,
  homeDateSubtitle,
  homeCountdownWrapper,
  homeRsvpButtonWrapper,
  homeRsvpButton,
} from './styles'

export default function Home() {
  const targetDate = new Date("2026-06-06T10:00:00+01:00");
  const handleNavigate = useCallback(() => {
    const el = document.getElementById('rsvp')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <Box
      id="home"
      component="section"
      sx={sectionBase}
    >
      <Box sx={sectionInner}>
        <Box sx={homePhotoCarouselWrapper}>
          <Box sx={homePhotoCarouselContainer}>
            <PhotoCarousel />
          </Box>
        </Box>

        <Box sx={homeDateWrapper}>
          <Typography variant="h5" sx={homeDateTitle}>
            Saturday, 6 June 2026
          </Typography>
          <Typography variant="h6" sx={homeDateSubtitle}>
            Hackney Town Hall, London
          </Typography>
        </Box>
        <Box sx={homeCountdownWrapper}>
          <Countdown target={targetDate} />
        </Box>
        <Box sx={homeRsvpButtonWrapper}>
          <Button sx={homeRsvpButton} size='large' onClick={handleNavigate}>RSVP</Button>
        </Box>
      </Box>
    </Box>
  )
}


