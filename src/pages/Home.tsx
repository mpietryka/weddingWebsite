import { Box, Button, Typography } from '@mui/material'
import { useCallback } from 'react'
import { Countdown } from '../components'
import { sectionBase, sectionInner, centerRow } from './styles'
import polaroids from '../assets/images/polaroids.jpg'

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
        <Countdown target={targetDate} />
        <Box sx={centerRow}>
          <Typography variant="h3" component="h2" >
            BARBARA + MATEUSZ
          </Typography>
        </Box>
        <Box sx={centerRow} style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography >
            Saturday, 6th June 2026 at 10 am
          </Typography>
          <Typography >
            Hackney Town Hall, London
          </Typography>
        </Box>
        <Box sx={centerRow}>
          <Button style={{ borderRadius: '30px', border: '1px solid black', minWidth: '150px' }} size='large' color="black" onClick={handleNavigate}>RSVP</Button>
        </Box>
        <Box>
          <img
            src={polaroids}
            alt="Barbara and Mateusz"
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}


