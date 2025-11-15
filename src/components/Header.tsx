import { AppBar, Toolbar, Button, Box } from '@mui/material'

type HeaderProps = {
  onNavigate?: (sectionId: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <AppBar position="fixed" style={{ boxShadow: 'none', color: 'black' }}>
      <Toolbar disableGutters sx={{ height: '100%', alignItems: 'center', bgcolor: '#F5F5F4', p: 3 }}>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
          <Button color="inherit" onClick={() => onNavigate?.('home')}>Home</Button>
          <Button color="inherit" onClick={() => onNavigate?.('schedule')}>Schedule</Button>
          <Button color="inherit" onClick={() => onNavigate?.('gifts')}>Gifts</Button>          
        </Box>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
          <Button color="inherit" onClick={() => onNavigate?.('rsvp')}>RSVP</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
