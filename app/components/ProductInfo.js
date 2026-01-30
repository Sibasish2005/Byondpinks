'use client';

import { useState } from 'react';
import { Heart, Share2, Truck, RotateCcw } from 'lucide-react';

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-bold uppercase tracking-widest mb-2">{product.name}</h1>
        <div className="flex items-center gap-4">
          <p className="text-xl font-medium text-gray-900">${product.price.toFixed(2)}</p>
          {product.onSale && (
             <span className="text-red-600 text-sm font-semibold bg-red-50 px-2 py-1 uppercase tracking-wider">Sale</span>
          )}
        </div>
      </div>

      {/* Selectors */}
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
             <span className="text-sm font-medium uppercase tracking-wide">Size: {selectedSize}</span>
             <button className="text-xs text-gray-500 underline">Size Guide</button>
          </div>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 flex items-center justify-center border text-sm font-medium transition-all ${
                  selectedSize === size
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 text-gray-600 hover:border-black'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
           <span className="text-sm font-medium uppercase tracking-wide mb-2 block">Quantity</span>
           <div className="flex w-32 border border-gray-200">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-xl"
              >-</button>
              <div className="flex-1 flex items-center justify-center font-medium">{quantity}</div>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-xl"
              >+</button>
           </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4">
        <button className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:scale-[1.01] transition-transform">
          Add to Cart - ${(product.price * quantity).toFixed(2)}
        </button>
        <button className="w-full border border-black text-black py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors">
          Buy It Now
        </button>
      </div>
      
      <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
         <button className="flex items-center gap-2 hover:text-black"><Heart className="w-4 h-4" /> Add to Wishlist</button>
         <button className="flex items-center gap-2 hover:text-black"><Share2 className="w-4 h-4" /> Share</button>
      </div>

      {/* Details */}
      <div className="border-t border-gray-100 pt-8 space-y-4 text-sm text-gray-600">
         <p>
            Elevate your wardrobe with the {product.name}. Crafted from premium materials, this piece combines timeless elegance with modern comfort. Perfect for any occasion.
         </p>
         <ul className="list-disc pl-5 space-y-1">
            <li>Premium breathable fabric</li>
            <li>Tailored fit</li>
            <li>Machine washable</li>
            <li>imported</li>
         </ul>
      </div>
      
      <div className="flex gap-8 border-t border-gray-100 pt-6">
         <div className="flex items-center gap-3">
             <Truck className="w-5 h-5 text-gray-400" />
             <div className="text-xs">
                <span className="font-bold block">Free Shipping</span>
                <span className="text-gray-500">On orders over $150</span>
             </div>
         </div>
          <div className="flex items-center gap-3">
             <RotateCcw className="w-5 h-5 text-gray-400" />
             <div className="text-xs">
                <span className="font-bold block">Free Returns</span>
                <span className="text-gray-500">Within 30 days</span>
             </div>
         </div>
      </div>
    </div>
  );
};

export default ProductInfo;
