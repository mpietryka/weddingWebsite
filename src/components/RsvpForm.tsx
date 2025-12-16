import { Box, TextField, Checkbox, FormControlLabel, Button, Typography } from '@mui/material'
import { useState } from 'react'

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    attending: null as boolean | null,
    plusOne: null as boolean | null
  })

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    attending: '',
    plusOne: ''
  })

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      attending: '',
      plusOne: ''
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.attending === null) {
      newErrors.attending = 'Please let us know if you will join us'
    }

    if (formData.plusOne === null) {
      newErrors.plusOne = 'Please let us know if you are bringing a +1'
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== '')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', formData)
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        attending: null,
        plusOne: null
      })
      setErrors({
        firstName: '',
        lastName: '',
        email: '',
        attending: '',
        plusOne: ''
      })
    }
  }

  const handleAttendanceChange = (attending: boolean) => {
    setFormData(prev => ({
      ...prev,
      attending: prev.attending === attending ? null : attending
    }))
  }

  const handlePlusOneChange = (plusOne: boolean) => {
    setFormData(prev => ({
      ...prev,
      plusOne: prev.plusOne === plusOne ? null : plusOne
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
          gap: 1,
          maxWidth: '500px',
          mx: 'auto',
          width: '100%'
        }}
      >
        <TextField
          label="First Name"
          value={formData.firstName}
          onChange={(e) => {
            setFormData(prev => ({ ...prev, firstName: e.target.value }))
            setErrors(prev => ({ ...prev, firstName: '' }))
          }}
          onBlur={() => {
            if (!formData.firstName.trim()) {
              setErrors(prev => ({ ...prev, firstName: 'First name is required' }))
            }
          }}
          error={!!errors.firstName}
          helperText={errors.firstName}
          FormHelperTextProps={{ sx: { fontSize: '0.7rem', mt: 0 } }}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
          fullWidth
        />

        <TextField
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => {
            setFormData(prev => ({ ...prev, lastName: e.target.value }))
            setErrors(prev => ({ ...prev, lastName: '' }))
          }}
          onBlur={() => {
            if (!formData.lastName.trim()) {
              setErrors(prev => ({ ...prev, lastName: 'Last name is required' }))
            }
          }}
          error={!!errors.lastName}
          helperText={errors.lastName}
          FormHelperTextProps={{ sx: { fontSize: '0.7rem', mt: 0 } }}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
          fullWidth
        />

        <TextField
          label="Email Address"
          type="text"
          value={formData.email}
          onChange={(e) => {
            setFormData(prev => ({ ...prev, email: e.target.value }))
            setErrors(prev => ({ ...prev, email: '' }))
          }}
          onBlur={() => {
            if (!formData.email.trim()) {
              setErrors(prev => ({ ...prev, email: 'Email address is required' }))
            } else if (!validateEmail(formData.email)) {
              setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
            }
          }}
          error={!!errors.email}
          helperText={errors.email}
          FormHelperTextProps={{ sx: { fontSize: '0.7rem', mt: 0} }}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
          fullWidth
        />

        <Box>
          <Typography variant="body1">
            Will you join us?
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.attending === true}
                  onChange={() => {
                    handleAttendanceChange(true)
                    setErrors(prev => ({ ...prev, attending: '' }))
                  }}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.attending === false}
                  onChange={() => {
                    handleAttendanceChange(false)
                    setErrors(prev => ({ ...prev, attending: '' }))
                  }}
                />
              }
              label="No"
            />
          </Box>
          {errors.attending && (
            <Typography variant="caption" color="error" sx={{ display: 'block', fontSize: '0.7rem' }}>
              {errors.attending}
            </Typography>
          )}
        </Box>

        <Box>
          <Typography variant="body1">
            Are you bringing a +1?
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.plusOne === true}
                  onChange={() => {
                    handlePlusOneChange(true)
                    setErrors(prev => ({ ...prev, plusOne: '' }))
                  }}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.plusOne === false}
                  onChange={() => {
                    handlePlusOneChange(false)
                    setErrors(prev => ({ ...prev, plusOne: '' }))
                  }}
                />
              }
              label="No"
            />
          </Box>
          {errors.plusOne && (
            <Typography variant="caption" color="error" sx={{ display: 'block', fontSize: '0.7rem' }}>
              {errors.plusOne}
            </Typography>
          )}
        </Box>

        <Button
          type="submit"
          size="large"
          style={{ borderRadius: '30px', border: '1px solid black', minWidth: '150px', color: 'black' }}
          sx={{ mt: 1 }}
        >
          Submit RSVP
        </Button>
      </Box>
    </Box>
  )
}
