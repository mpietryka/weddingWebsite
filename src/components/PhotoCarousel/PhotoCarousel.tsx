import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useSwipeable } from 'react-swipeable'
import { carouselContainer, carouselImage, dotsContainer, dotStyle } from './PhotoCarousel.style'

import photo1 from '../../assets/images/weddingPhotos/1.jpg'
import photo2 from '../../assets/images/weddingPhotos/2.jpg'
import photo3 from '../../assets/images/weddingPhotos/3.jpg'
import photo4 from '../../assets/images/weddingPhotos/4.jpg'
import photo5 from '../../assets/images/weddingPhotos/5.jpg'
import photo6 from '../../assets/images/weddingPhotos/6.jpg'
import photo7 from '../../assets/images/weddingPhotos/12.jpg'
import photo8 from '../../assets/images/weddingPhotos/8.jpg'
import photo10 from '../../assets/images/weddingPhotos/10.jpg'
import photo11 from '../../assets/images/weddingPhotos/11.jpg'

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
  photo11
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
    <Box {...handlers} sx={carouselContainer}>
      <Box
        component="img"
        src={photos[currentIndex]}
        alt={`Wedding photo ${currentIndex + 1}`}
        sx={carouselImage}
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />

      <Box sx={dotsContainer}>
        {photos.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={dotStyle(currentIndex === index)}
          />
        ))}
      </Box>
    </Box>
  )
}
