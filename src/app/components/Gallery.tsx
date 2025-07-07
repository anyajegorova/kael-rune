import React from 'react'
import './styles/gallery.css'

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

// Function to distribute images across columns
const distributeImages = (images: GalleryImage[], numColumns: number): GalleryImage[][] => {
  const columns: GalleryImage[][] = Array.from({ length: numColumns }, () => [])
  images.forEach((image: GalleryImage, index: number) => {
    columns[index % numColumns].push(image)
  })
  return columns
}

const Gallery = () => {
  const columns = distributeImages(galleryImages, 4)

  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-row">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="gallery-column">
              {column.map((image, imageIndex) => (
                <div key={imageIndex} className="gallery-item">
                  <div className="image-wrapper">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="gallery-image"
                      loading="lazy"
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
    </section>
  )
}

export default Gallery
