
'use client'
import React, { useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface GalleryModalProps {
  isOpen: boolean
  imageSrc: string
  imageAlt: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, imageSrc, imageAlt, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  // Use a dedicated modal root if available, fallback to body
  const modalRoot: Element = typeof window !== 'undefined' ? (document.getElementById('modal-root') || document.body) : document.body;
  return createPortal(
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={e => e.stopPropagation()}>
        <button className="gallery-modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <button className="gallery-modal-nav left" onClick={e => { e.stopPropagation(); onPrev(); }} aria-label="Previous image">
          <ChevronLeft size={32} />
        </button>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="gallery-modal-image"
          width={900}
          height={600}
          style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }}
          priority
        />
        <button className="gallery-modal-nav right" onClick={e => { e.stopPropagation(); onNext(); }} aria-label="Next image">
          <ChevronRight size={32} />
        </button>
        <div className="gallery-modal-caption">{imageAlt}</div>
      </div>
    </div>,
    modalRoot
  )
}

export default GalleryModal
