import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../utils/Redux/CartSlice';

const CartShimmer = () => (
  <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 border-b pb-4 animate-pulse">
    <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
    <div className="flex-1 space-y-2">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
    </div>
    <div className="h-4 bg-gray-300 rounded w-12"></div>
    <div className="h-8 bg-gray-300 rounded w-16"></div>
  </div>
);

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const isLoading = false;

  const handleBuyNow = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Proceeding to checkout with total ₹' + cart.reduce((sum, item) => sum + item.price, 0).toFixed(2));
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-orange-50 via-white to-blue-50 p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-lg space-y-4">
        <CartShimmer />
        <CartShimmer />
        <CartShimmer />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mt-20 text-center px-4">
        <p className="text-xl text-gray-600">🛒 Your cart is empty!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-orange-50 via-white to-blue-50 p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">🛍️ Your Shopping Cart</h1>

      <div className="space-y-4">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-lg border"
            />

            <div className="flex-1 min-w-[120px] text-center sm:text-left">
              <p className="text-base sm:text-lg font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500">₹{item.price}</p>
            </div>

            <p className="font-bold text-blue-600 min-w-[80px] text-center">₹{item.price.toFixed(2)}</p>

            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600 transition w-full sm:w-auto"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <p className="text-lg sm:text-xl font-bold text-gray-700 text-right sm:text-left flex-1">
          Total: ₹{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </p>
        
        <button
          onClick={handleBuyNow}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition w-full sm:w-auto"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
