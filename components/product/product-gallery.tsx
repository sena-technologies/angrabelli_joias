'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showZoom, setShowZoom] = useState(false)

  const mainImage = images[selectedIndex]
  const thumbImages = images.slice(0, 4)

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group cursor-zoom-in">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={`${productName} - ${selectedIndex + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onClick={() => setShowZoom(true)}
            sizes="(max-width: 768px) 100vw, 500px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Sem imagem
          </div>
        )}

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        {/* Zoom Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white"
          onClick={() => setShowZoom(true)}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {thumbImages.length > 1 && (
        <div className="flex gap-2">
          {thumbImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                selectedIndex === index
                  ? 'border-primary'
                  : 'border-muted hover:border-primary/50'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      {showZoom && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowZoom(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={mainImage}
              alt={`${productName} - Zoom`}
              width={1200}
              height={1200}
              className="object-contain w-full h-full"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setShowZoom(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
