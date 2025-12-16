import { Box, TextField, Checkbox, FormControlLabel, Button } from '@mui/material'
import { useState } from 'react'

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    attending: null as boolean | null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleAttendanceChange = (attending: boolean) => {
    setFormData(prev => ({
      ...prev,
      attending: prev.attending === attending ? null : attending
    }))
  }

  return (
    <Box sx={{ px: { xs: 2, md: 0 }, width: '100%' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          maxWidth: '500px',
          mx: 'auto',
          width: '100%'
        }}
      >
        <TextField
          label="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
          required
          fullWidth
        />

        <TextField
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
          required
          fullWidth
        />

        <TextField
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          fullWidth
        />

        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.attending === true}
                onChange={() => handleAttendanceChange(true)}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.attending === false}
                onChange={() => handleAttendanceChange(false)}
              />
            }
            label="No"
          />
        </Box>

        <Button
          type="submit"
          size="large"
          style={{ borderRadius: '30px', border: '1px solid black', minWidth: '150px', color: 'black' }}
          sx={{ mt: 2 }}
        >
          Submit RSVP
        </Button>
      </Box>
    </Box>
  )
}
