'use client';

import { useState } from 'react';
import Image from 'next/image';

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative w-20 h-24 flex-shrink-0 border transition-all ${
              selectedImage === index ? 'border-black opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={img}
              alt={`Product View ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 aspect-[3/4] bg-gray-100 overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Product Main View"
          fill
          className="object-cover transition-all duration-500"
          priority
        />
      </div>
    </div>
  );
};

export default ProductGallery;
