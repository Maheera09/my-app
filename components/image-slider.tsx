"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  { src: '/p1.png', alt: 'Plant 1' },
  { src: '/p2.png', alt: 'Plant 2' },
  { src: '/p3.png', alt: 'Plant 3' },
  { src: '/p4.png', alt: 'Plant 4' },
]

export function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div key={currentImage} className="relative w-full h-screen">
      <Image
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        fill
        style={{
          objectFit: 'cover',
          transition: 'opacity 0.5s ease-in-out',
        }}
        priority
      />
    </div>
  )
}

