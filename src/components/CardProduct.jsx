import React from 'react';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/Redux/CartSlice';

const CardProduct = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(addItems(product));
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 p-4 w-full max-w-xs flex flex-col items-center gap-3">
      
      {/* Product Image */}
      <img
        src={item.thumbnail || item.images?.[0]}
        alt={item.title}
        className="w-full max-w-[200px] h-auto object-cover rounded-xl border"
        loading="lazy"
      />

      {/* Product Title */}
      <h2 className="text-center text-base sm:text-lg font-bold text-gray-800">
        {item.title}
      </h2>

      {/* Brand + Price */}
      <p className="text-xs sm:text-sm text-gray-500">{item.brand}</p>
      <p className="text-sm sm:text-md font-semibold text-blue-600">₹{item.price}</p>

      {/* Rating */}
      <p className="text-yellow-500 text-sm">⭐ {item.rating}</p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 mt-2 w-full justify-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition w-full sm:w-auto"
          onClick={() => handleClick(item)}
        >
          Add to Cart
        </button>

        <Link to={`/product/${item.id}`}>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition w-full sm:w-auto">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
