import { Box, TextField, Checkbox, FormControlLabel, Button, Typography, Alert, CircularProgress } from '@mui/material'
import { useState } from 'react'
import {
  formContainer,
  formBox,
  alertBox,
  textField,
  helperTextProps,
  checkboxContainer,
  errorText,
  submitButton,
  submitButtonSx,
  loadingSpinner,
} from './RsvpForm.style'

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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      setSubmitStatus(null)

      try {
        const response = await fetch('https://weddingbff.onrender.com/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            recipient: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            attending: formData.attending,
            plusOne: formData.plusOne
          })
        })

        const data = await response.json()

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: 'Thank you for your RSVP! Please check your email for confirmation.'
          })
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
        } else {
          setSubmitStatus({
            type: 'error',
            message: data.error || 'Failed to submit RSVP. Please try again.'
          })
        }
      } catch (error) {
        console.error('Error submitting RSVP:', error)
        setSubmitStatus({
          type: 'error',
          message: 'Failed to submit RSVP. Please check your connection and try again.'
        })
      } finally {
        setIsSubmitting(false)
      }
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
    <Box sx={formContainer}>
      <Box component="form" onSubmit={handleSubmit} sx={formBox}>
        {submitStatus && (
          <Alert severity={submitStatus.type} sx={alertBox}>
            {submitStatus.message}
          </Alert>
        )}
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
          FormHelperTextProps={helperTextProps}
          sx={textField}
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
          FormHelperTextProps={helperTextProps}
          sx={textField}
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
          FormHelperTextProps={helperTextProps}
          sx={textField}
          fullWidth
        />

        <Box>
          <Typography variant="body1">
            Will you join us?
          </Typography>
          <Box sx={checkboxContainer}>
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
            <Typography variant="caption" color="error" sx={errorText}>
              {errors.attending}
            </Typography>
          )}
        </Box>

        <Box>
          <Typography variant="body1">
            Are you bringing a +1?
          </Typography>
          <Box sx={checkboxContainer}>
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
            <Typography variant="caption" color="error" sx={errorText}>
              {errors.plusOne}
            </Typography>
          )}
        </Box>

        <Button
          type="submit"
          size="large"
          disabled={isSubmitting}
          style={submitButton}
          sx={submitButtonSx}
        >
          {isSubmitting ? (
            <>
              <CircularProgress size={20} sx={loadingSpinner} />
              Submitting...
            </>
          ) : (
            'Submit RSVP'
          )}
        </Button>
      </Box>
    </Box>
  )
}
