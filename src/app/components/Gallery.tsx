import React from 'react'
import Image from 'next/image'
import './styles/gallery.css'

const galleryImages = [
  { src: '/boat.webp', alt: 'Peaceful boat on water', aspectRatio: 'wide' },
  { src: '/boats.webp', alt: 'Multiple boats docked', aspectRatio: 'wide' },
  { src: '/buildings.webp', alt: 'Urban architecture', aspectRatio: 'tall' },
  { src: '/couple.webp', alt: 'Couple portrait', aspectRatio: 'wide' },
  { src: '/inside.webp', alt: 'Interior photography', aspectRatio: 'wide' },
  { src: '/lonely.webp', alt: 'Solitary scene', aspectRatio: 'tall' },
  { src: '/mountains.webp', alt: 'Mountain landscape', aspectRatio: 'wide' },
  { src: '/photographer.png', alt: 'Photographer at work', aspectRatio: 'tall' },
  { src: '/portrait.webp', alt: 'Portrait photography', aspectRatio: 'tall' },
  { src: '/skyscrapers.webp', alt: 'Urban skyline', aspectRatio: 'tall' },
  { src: '/stairs.webp', alt: 'Architectural stairs', aspectRatio: 'wide' },
  { src: '/swan.webp', alt: 'Elegant swan', aspectRatio: 'wide' },
  { src: '/swimming.webp', alt: 'Swimming scene', aspectRatio: 'wide' },
  { src: '/trees.webp', alt: 'Natural forest', aspectRatio: 'tall' },
  { src: '/underwater.webp', alt: 'Underwater photography', aspectRatio: 'wide' },
]

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`gallery-item ${image.aspectRatio}`}
            >
              <div className="image-wrapper">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <span className="image-title">{image.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
