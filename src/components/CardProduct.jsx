import React from 'react';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/Redux/CartSlice';

const CardProduct = ({ item }) => {
  const dispatch = useDispatch();

   const handleClick=(product)=>{
      dispatch(addItems(product))
    }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 p-4 w-64 flex flex-col items-center gap-3">
      
      {/* Product Image */}
      <img 
        src={item.thumbnail || item.images?.[0]} 
        alt={item.title} 
        className="w-48 h-48 object-cover rounded-xl border"
      />

      {/* Product Title */}
      <h2 className="text-center text-lg font-bold text-gray-800">
        {item.title}
      </h2>

      {/* Brand + Price */}
      <p className="text-sm text-gray-500">{item.brand}</p>
      <p className="text-md font-semibold text-blue-600">₹{item.price}</p>

      {/* Rating */}
      <p className="text-yellow-500">⭐ {item.rating}</p>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 hover:shadow-lg transition" onClick={()=>handleClick(item)}>
          Add to Cart
        </button>

        <Link to={`/product/${item.id}`}>
          <button className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 hover:shadow-lg transition">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
