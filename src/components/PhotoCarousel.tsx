import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useSwipeable } from 'react-swipeable'

import photo1 from '../assets/images/weddingPhotos/1.JPG'
import photo2 from '../assets/images/weddingPhotos/2.JPG'
import photo3 from '../assets/images/weddingPhotos/3.JPG'
import photo4 from '../assets/images/weddingPhotos/4.JPG'
import photo5 from '../assets/images/weddingPhotos/5.JPG'
import photo6 from '../assets/images/weddingPhotos/6.JPG'
import photo7 from '../assets/images/weddingPhotos/7.JPG'
import photo8 from '../assets/images/weddingPhotos/8.JPG'
import photo10 from '../assets/images/weddingPhotos/10.JPG'
import photo11 from '../assets/images/weddingPhotos/11.JPG'

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo10,
  photo11,
]

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    trackMouse: true,
  })

  return (
    <Box
      {...handlers}
      sx={{
        position: 'relative',
        width: '100%',
        paddingTop: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={photos[currentIndex]}
        alt={`Wedding photo ${currentIndex + 1}`}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />
    </Box>
  )
}
