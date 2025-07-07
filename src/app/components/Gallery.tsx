
'use client'
import React, { useState } from 'react'
import GalleryModal from './GalleryModal'
import Image from 'next/image'
import './styles/gallery.css'
import './styles/galleryModal.css'

interface GalleryImage {
  src: string
  alt: string
}

const galleryImages: GalleryImage[] = [
  { src: '/boat.webp', alt: 'Peaceful boat on water' },
  { src: '/boats.webp', alt: 'Multiple boats docked' },
  { src: '/buildings.webp', alt: 'Urban architecture' },
  { src: '/close.webp', alt: 'Close-up perspective' },
  { src: '/couple.webp', alt: 'Couple portrait' },
  { src: '/desert.webp', alt: 'Desert landscape' },
  { src: '/inside.webp', alt: 'Interior photography' },
  { src: '/lonely.webp', alt: 'Solitary scene' },
  { src: '/mountains.webp', alt: 'Mountain landscape' },
  { src: '/oldtown.webp', alt: 'Old town architecture' },
  { src: '/parking-lot.webp', alt: 'Urban parking scene' },
  { src: '/plane.webp', alt: 'Aircraft photography' },
  { src: '/portrait.webp', alt: 'Portrait photography' },
  { src: '/rain.webp', alt: 'Rainy day atmosphere' },
  { src: '/seaside.webp', alt: 'Coastal scenery' },
  { src: '/skyscrapers.webp', alt: 'Urban skyline' },
  { src: '/stairs.webp', alt: 'Architectural stairs' },
  { src: '/swan.webp', alt: 'Elegant swan' },
  { src: '/swimming.webp', alt: 'Swimming scene' },
  { src: '/trees.webp', alt: 'Natural forest' },
  { src: '/turtle.webp', alt: 'Marine life' },
  { src: '/underwater.webp', alt: 'Underwater photography' },
]


// Function to distribute images across columns, preserving flat index
const distributeImages = (images: GalleryImage[], numColumns: number): { image: GalleryImage, flatIndex: number }[][] => {
  const columns: { image: GalleryImage, flatIndex: number }[][] = Array.from({ length: numColumns }, () => [])
  images.forEach((image, index) => {
    columns[index % numColumns].push({ image, flatIndex: index })
  })
  return columns
}

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const columns = distributeImages(galleryImages, 4)
  const flatImages = galleryImages

  const handleOpenModal = (index: number) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }

  const handleCloseModal = () => setModalOpen(false)
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + flatImages.length) % flatImages.length)
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % flatImages.length)

  // Helper to get the flat index from column/row


  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-row">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="gallery-column">
              {column.map(({ image, flatIndex }) => (
                <div key={flatIndex} className="gallery-item" onClick={() => handleOpenModal(flatIndex)}>
                  <div className="image-wrapper">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="gallery-image"
                      width={400}
                      height={300}
                      style={{ width: '100%', height: 'auto' }}
                      loading="lazy"
                      sizes="(max-width: 800px) 100vw, 25vw"
                      priority={false}
                    />
                    <div className="image-overlay">
                      <span className="image-title">{image.alt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <GalleryModal
        isOpen={modalOpen}
        imageSrc={flatImages[currentIndex]?.src || ''}
        imageAlt={flatImages[currentIndex]?.alt || ''}
        onClose={handleCloseModal}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  )
}

export default Gallery
