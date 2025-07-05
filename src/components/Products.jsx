import React from 'react';
import { useParams } from 'react-router';
import { useCategories } from '../hooks/useCategories';
import CardProduct from './CardProduct';

const Products = () => {
  const { name } = useParams();
  const data = useCategories(name);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data?.map((item) => (
        <CardProduct key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
