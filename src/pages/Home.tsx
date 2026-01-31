import { Box, Button, Typography } from '@mui/material'
import { useCallback } from 'react'
import { Countdown, PhotoCarousel } from '../components'
import { sectionBase, sectionInner, centerRow } from './styles'

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
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', px: { xs: 0, md: 4, lg: 8 } }}>
          <Box sx={{ width: '100%', maxWidth: { xs: '100%', md: '600px', lg: '700px' } }}>
            <PhotoCarousel />
          </Box>
        </Box>

        <Box sx={centerRow} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '10px'}}>
          <Typography variant="h5" sx={{fontWeight: 500, textAlign: 'center'}}>
            Saturday, 6 June 2026
          </Typography>
          <Typography variant="h6" sx={{fontWeight: 300, textAlign: 'center', marginBottom: '8px'}}>
            Hackney Town Hall, London
          </Typography>
        </Box>
        <Box sx={{ marginBottom: '10px'}}>
          <Countdown target={targetDate} />
        </Box>
        <Box sx={centerRow} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button style={{ borderRadius: '30px', border: '1px solid black', minWidth: '80px', color: 'black', backgroundColor: '#FAFAFA' }} size='large' onClick={handleNavigate}>RSVP</Button>
        </Box>

      </Box>
    </Box>
  )
}


