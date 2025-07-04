import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../utils/Redux/CartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mt-20 text-center">
        <p className="text-xl text-gray-600">🛒 Your cart is empty!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🛍️ Your Shopping Cart</h1>

      <div className="space-y-4">
        {cart.map(item => (
          <div 
            key={item.id} 
            className="flex flex-wrap md:flex-nowrap items-center gap-4 border-b pb-4"
          >
            <img 
              src={item.thumbnail} 
              alt={item.title} 
              className="w-20 h-20 object-cover rounded-lg border"
            />
            
            <div className="flex-1 min-w-[120px]">
              <p className="text-lg font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </div>

            <p className="font-bold text-blue-600 min-w-[80px]">₹{(item.price).toFixed(2)}</p>

            <button 
              onClick={() => dispatch(removeItem(item.id))}
              className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600 transition shrink-0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <p className="text-xl font-bold text-gray-700 mt-6">
        Total: ₹{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
      </p>
    </div>
  );
}

export default Cart;
