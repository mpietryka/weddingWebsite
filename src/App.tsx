import './App.css'

import { CssBaseline, Box } from '@mui/material'
import { useCallback } from 'react'
import { Header } from './components'
import { Home, Rsvp, Schedule, Gifts } from './pages'

function App() {
  const handleNavigate = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      <CssBaseline />
      <Header onNavigate={handleNavigate} />
      <Box
        component="main"
        sx={{
          height: '100vh',
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
          bgcolor: 'background.default',
          msOverflowStyle: 'none', // IE/Edge
          scrollbarWidth: 'none', // Firefox
          '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
        }}
      >
        <div style={{ height: '80px', backgroundColor: '#F5F5F4'}} />
        <Home />
        <Schedule />
        <Gifts />
        <Rsvp />
      </Box>
    </>
  )
}

export default App
