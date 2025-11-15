import { useEffect, useMemo, useRef, useState } from 'react'
import { Box, Typography } from '@mui/material'

type CountdownProps = {
  target: Date | string | number
  onComplete?: () => void
  className?: string
}

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  completed: boolean
}

function toTimestampMs(target: Date | string | number): number {
  if (target instanceof Date) return target.getTime()
  if (typeof target === 'number') return target
  const parsed = new Date(target).getTime()
  return Number.isNaN(parsed) ? Date.now() : parsed
}

function calculateTimeLeft(targetMs: number): TimeLeft {
  const now = Date.now()
  const diff = Math.max(0, targetMs - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  return { days, hours, minutes, completed: diff === 0 }
}

function pad2(n: number): string {
  return n.toString().padStart(2, '0')
}

export default function Countdown({ target, onComplete, className }: CountdownProps) {
  const targetMs = useMemo(() => toTimestampMs(target), [target])
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetMs))
  const completedCalledRef = useRef(false)

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetMs))
    completedCalledRef.current = false
    const id = window.setInterval(() => {
      setTimeLeft(() => {
        const next = calculateTimeLeft(targetMs)
        if (next.completed && !completedCalledRef.current) {
          completedCalledRef.current = true
          onComplete?.()
        }
        return next
      })
    }, 1000)
    return () => window.clearInterval(id)
  }, [targetMs, onComplete])

  return (
    <Box className={className} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <TimeBlock label="Days" value={String(timeLeft.days)} />
      <Separator />
      <TimeBlock label="Hours" value={pad2(timeLeft.hours)} />
      <Separator />
      <TimeBlock label="Minutes" value={pad2(timeLeft.minutes)} />
      <Separator />
      <TimeBlock label="Seconds" value={pad2(Math.max(0, Math.floor((toTimestampMs(target) - Date.now()) / 1000) % 60))} />
    </Box>
  )
}

function TimeBlock({ label, value }: { label: string; value: string }) {
  return (
    <Box sx={{ textAlign: 'center', minWidth: 72 }}>
      <Typography variant="h3" component="div" color="text.primary" sx={{ fontSize: 12, lineHeight: 1.2 }}>
        {value}
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ fontSize: 12, lineHeight: 1.2 }}>
        {label}
      </Typography>
    </Box>
  )
}

function Separator() {
  return (
    <Typography variant="h4" component="div" color="text.secondary" sx={{ lineHeight: 1, fontSize: 12 }}>
      :
    </Typography>
  )
}


