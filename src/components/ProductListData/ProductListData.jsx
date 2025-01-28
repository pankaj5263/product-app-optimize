import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const fetchProductList = async (page = 1) => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

// Skeleton loader for loading state
const SkeletonLoader = () => (
  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="bg-gray-300 h-48 rounded-lg animate-pulse"></div>
    ))}
  </div>
);

export default function ProductList() {
  const [page, setPage] = useState(1);

  // React Query to fetch the product list
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products', page], // Unique key for pagination
    queryFn: () => fetchProductList(page),
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    keepPreviousData: true, // Keep previous data while loading new data
  });
 console.log(data, isLoading, isError, error);
  const queryClient = useQueryClient();

  // Handle error state
  if (isError) return <div>Error: {error.message}</div>;

  // Handle loading state
  if (isLoading) return <SkeletonLoader />;

  // Handle empty state
  if (data.length === 0) return <div>No products available at the moment.</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((product) => (
          <Card key={product.id} product={product}>
            <Link to={`/product/${product.id}`} className="text-blue-500">
              View Details
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
