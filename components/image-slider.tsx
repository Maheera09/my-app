"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/p1.png', alt: 'Plant 1' },
  { src: '/p2.png', alt: 'Plant 2' },
  { src: '/p3.png', alt: 'Plant 3' },
  { src: '/p4.png', alt: 'Plant 4' },
]

export function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }, [])

  const prevImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextImage, 5000)
    return () => clearInterval(timer)
  }, [nextImage])

  return (
    <div className="relative w-full h-[90vh] overflow-hidden group">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          fill
          style={{
            objectFit: 'cover',
            transition: 'opacity 1s ease-in-out',
          }}
          className={`absolute top-0 left-0 w-full h-full ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          priority={index === 0}
        />
      ))}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/80 hover:bg-white text-gray-800"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/80 hover:bg-white text-gray-800"
          onClick={nextImage}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

