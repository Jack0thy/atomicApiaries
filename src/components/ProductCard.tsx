import React from 'react';
import Image from 'next/image';
import { Product } from '../types/types';

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-sage-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-sage-800 group-hover:text-honey-700 transition-colors">
            {product.name}
          </h3>
          <span className="text-honey-700 font-bold text-lg">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sage-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sage-500 text-sm px-3 py-1 bg-sage-50 rounded-full">
            {product.availability}
          </span>
          <button className="bg-sage-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-honey-600 transition-colors duration-300">
            Contact for Availability
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard; 