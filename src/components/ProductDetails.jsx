import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/Redux/CartSlice';

const ProductDetails = () => {

    const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick=(product)=>{
    dispatch(addItems(product))
  }
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
    <div className="max-w-6xl mx-auto mt-10 p-4 flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow">
      
      {/* LEFT: Images */}
      <div className="flex flex-col items-center">
        <img 
          src={selectedImage}
          alt={product.title}
          className="w-80 h-80 object-contain rounded-xl border"
        />

        {/* Thumbnails */}
        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {product.images?.map((img, idx) => (
            <img 
              key={idx}
              src={img}
              alt={`thumbnail-${idx}`}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                img === selectedImage ? 'border-blue-500' : 'border-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: Details */}
      <div className="flex-1 flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-xl text-blue-600 font-semibold">₹{product.price}</p>
        <p className="text-yellow-500">⭐ {product.rating}</p>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-sm text-gray-400">Stock: {product.stock}</p>

        <button className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600 hover:shadow-lg transition mt-4 w-fit" onClick={()=>handleClick(product)}>
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductDetails;
