import './App.css'

import Header from './components/Header'
import { CssBaseline, Box, Toolbar } from '@mui/material'
import { useCallback } from 'react'
import Home from './pages/Home'
import Rsvp from './pages/Rsvp'
import Schedule from './pages/Schedule'
import Gifts from './pages/Gifts'
import Faqs from './pages/Faqs'

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
        <Toolbar />
        <Home />
        <Rsvp />
        <Schedule />
        <Gifts />
        <Faqs />
      </Box>
    </>
  )
}

export default App
