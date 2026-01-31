import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material'

type HeaderProps = {
  onNavigate?: (sectionId: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#F5F5F4', boxShadow: 'none', color: 'black' }}>
      <Typography variant="h3" component="h2" sx={{ marginTop: '16px', fontSize: { xs: 'h4.fontSize', md: 'h3.fontSize' } }}>
            BARBARA + MATEUSZ
          </Typography>
      <Toolbar disableGutters variant="dense" sx={{ alignItems: 'center', bgcolor: '#F5F5F4', py: -1, px: 1, justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Button size="small" color="inherit" onClick={() => onNavigate?.('home')} sx={{ fontWeight: 400 }}>Welcome</Button>
          <Button size="small" color="inherit" onClick={() => onNavigate?.('schedule')} sx={{ fontWeight: 400 }}>Schedule</Button>
          <Button size="small" color="inherit" onClick={() => onNavigate?.('rsvp')} sx={{ fontWeight: 400 }}>RSVP</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
