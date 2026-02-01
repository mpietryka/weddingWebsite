import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material'
import { appBarStyle, titleText, toolbarStyle, navContainer, navButton } from './Header.style'

type HeaderProps = {
  onNavigate?: (sectionId: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <AppBar position="fixed" style={appBarStyle}>
      <Typography variant="h3" component="h2" sx={titleText}>
        BARBARA + MATEUSZ
      </Typography>
      <Toolbar disableGutters variant="dense" sx={toolbarStyle}>
        <Box sx={navContainer}>
          <Button size="small" color="inherit" onClick={() => onNavigate?.('home')} sx={navButton}>Welcome</Button>
          <Button size="small" color="inherit" onClick={() => onNavigate?.('schedule')} sx={navButton}>Schedule</Button>
          <Button size="small" color="inherit" onClick={() => onNavigate?.('qa')} sx={navButton}>Q&A</Button>
          <Button size="small" color="inherit" onClick={() => onNavigate?.('rsvp')} sx={navButton}>RSVP</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
