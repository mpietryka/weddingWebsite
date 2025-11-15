import { Box, Button, Typography } from '@mui/material'
import { useCallback } from 'react'
import { Countdown } from '../components'
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
        <Typography variant="h3" component="h2">
          We're getting married in:
        </Typography>
        <Box sx={centerRow}>
          <Countdown target={targetDate} />
        </Box>
        <Box sx={centerRow}>
        </Box>
        <Box sx={centerRow}>
          <Button style={{ borderRadius: '30px', border: '1px solid #3496AE', minWidth: '150px'}} size='large' color="primary" onClick={handleNavigate}>RSVP</Button>
        </Box>
      </Box>
    </Box>
  )
}


