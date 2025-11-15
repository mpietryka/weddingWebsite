import { AppBar, Toolbar, Button, Box } from '@mui/material'

type HeaderProps = {
  onNavigate?: (sectionId: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <AppBar position="fixed" color="transparent" style={{ backgroundColor: 'white ', boxShadow: 'none' }} sx={{ height: '80px' }}>
      <Toolbar sx={{ height: '100%', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button color="inherit" onClick={() => onNavigate?.('home')}>Home</Button>
          <Button color="inherit" onClick={() => onNavigate?.('schedule')}>Schedule</Button>
          <Button color="inherit" onClick={() => onNavigate?.('gifts')}>Gifts</Button>
          <Button color="inherit" onClick={() => onNavigate?.('rsvp')}>RSVP</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
