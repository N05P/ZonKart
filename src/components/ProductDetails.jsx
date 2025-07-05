import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/Redux/CartSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddToCart = (product) => {
    dispatch(addItems(product));
  };

  const handleBuyNow = (product) => {
    dispatch(addItems(product));
    alert(`Proceeding to payment for: ${product.title}`);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setSelectedImage(data.thumbnail || data.images[0]);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-6 p-4 sm:p-6 bg-white rounded-2xl shadow-md flex flex-col md:flex-row gap-6">
      
      {/* LEFT: Images */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        <img 
          src={selectedImage}
          alt={product.title}
          className="w-full max-w-xs sm:max-w-sm object-contain rounded-lg border"
        />

        {/* Thumbnails */}
        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {product.images?.map((img, idx) => (
            <img 
              key={idx}
              src={img}
              alt={`thumbnail-${idx}`}
              onClick={() => setSelectedImage(img)}
              className={`w-14 h-14 sm:w-16 sm:h-16 object-cover rounded cursor-pointer border-2 ${
                img === selectedImage ? 'border-blue-500' : 'border-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: Details */}
      <div className="flex-1 flex flex-col gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-lg sm:text-xl text-blue-600 font-semibold">₹{product.price}</p>
        <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
        <p className="text-gray-700 text-sm sm:text-base">{product.description}</p>
        <p className="text-xs text-gray-400">Stock: {product.stock}</p>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition w-full sm:w-auto"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>

          <button 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition w-full sm:w-auto"
            onClick={() => handleBuyNow(product)}
          >
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
