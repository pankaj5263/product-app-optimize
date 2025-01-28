import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ product }) {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2 rounded" />
      <h2 className="font-bold text-lg">{product.title}</h2>
      <p className="text-gray-600">{product.price}</p>
      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
      <Link
        to={`/details/${product.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}
