import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { useCategoryApi } from '../hooks/useCategoryApi';
import { addApiData } from '../utils/Redux/ApiSlice';
import { filterData } from '../helper';
import logo from '../assets/logo.png';

const Header = () => {
  const select = useSelector((store) => store.cart);
  const ref = useRef();

  const dispatch = useDispatch();
  const data = useCategoryApi();
  const [api, setApi] = useState(data);

  useEffect(() => {
    setApi(data);
    dispatch(addApiData(data));
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = ref.current.value;
    const no = filterData(value, api);
    dispatch(addApiData(no));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center px-4 py-2 sm:px-14 sm:py-4 gap-2">
        
        {/* Logo */}
        <img src={logo} alt="zonkart" className="w-16 sm:w-28" />

        {/* Search Box */}
        <div className="w-full sm:w-auto border-2 border-gray-300 p-2 rounded-2xl bg-gray-50">
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              ref={ref}
              placeholder="Search"
              type="text"
              className="w-full text-sm sm:text-base outline-none border-0 px-2 py-1 bg-transparent"
            />
          </form>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
          <button className="text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-3 py-2 shadow-sm hover:shadow-md transition">
            Login
          </button>

          <Link to="/cart">
            <div className="flex gap-1 sm:gap-2 rounded-2xl items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 shadow-sm hover:shadow-md transition">
              <p className="text-sm sm:text-base flex items-center">Cart</p>
              <p className="text-sm">{select.length}</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
