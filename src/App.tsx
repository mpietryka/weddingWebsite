import './App.css'

import { CssBaseline, Box, ThemeProvider, createTheme } from '@mui/material'
import { useCallback } from 'react'
import { Header } from './components'
import { Home, Rsvp, Schedule } from './pages'

const theme = createTheme({
  typography: {
    fontFamily: '"Libre Baskerville", "Baskerville", serif',
  },
})

function App() {
  const handleNavigate = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onNavigate={handleNavigate} />
      <Box
        component="main"
        sx={{
          height: '100vh',
          overflowY: 'auto',
          bgcolor: 'background.default',
          msOverflowStyle: 'none', // IE/Edge
          scrollbarWidth: 'none', // Firefox
          '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
        }}
      >
        <div style={{ height: '60px', backgroundColor: '#F5F5F4'}} />
        <Home />
        <Schedule />
        <Rsvp />
      </Box>
    </ThemeProvider>
  )
}

export default App
