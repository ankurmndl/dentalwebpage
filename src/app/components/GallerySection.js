'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const images = [
  { src: '/images/gallery/clinic1.jpg', alt: 'Clinic Interior' },
  { src: '/images/gallery/smile1.jpg', alt: 'Patient Smile - Before/After' },
  { src: '/images/gallery/clinic2.jpg', alt: 'Treatment Room' },
  { src: '/images/gallery/smile2.jpg', alt: 'Smile Makeover' },
  { src: '/images/gallery/clinic3.jpg', alt: 'Reception Area' },
  { src: '/images/gallery/smile3.jpg', alt: 'Another Happy Patient' },
];

export default function GallerySection() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
          Smile Gallery
        </h2>
        <p className="text-gray-600 text-lg">
          Real smiles. Real results. Take a look at our patient transformations and clinic environment.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            onClick={() => setIndex(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 md:h-64 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
        plugins={[Thumbnails, Zoom, Fullscreen]}
      />
    </section>
  );
}
