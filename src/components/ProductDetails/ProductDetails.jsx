import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// Fetch a single product by ID
const fetchProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch product details using React Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div>Loading product...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Back
      </button>
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-gray-600">{data.price}</p>
      <p className="text-gray-500 text-sm">{data.category}</p>
      <p className="mt-4">{data.description}</p>
    </div>
  );
}
