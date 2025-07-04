import React from 'react'
import { useRef,useState,useEffect } from 'react';
import { useCategoryApi } from '../hooks/useCategoryApi';
import { useDispatch } from 'react-redux';
import { addApiData } from '../utils/Redux/ApiSlice';
import { filterData } from '../helper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import logo from '../assets/logo.png'

const Header = () => {

    const select = useSelector((Store)=>Store.cart)
    const ref = useRef();

    const dispatch = useDispatch();
      const data = useCategoryApi();
      const [api,setApi] = useState(data);
  
      useEffect(()=>{
          setApi(data);
          dispatch(addApiData(data));

      },[data])

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = ref.current.value;
        const no = filterData(value,api);
        dispatch(addApiData(no))
    }

    return (
        <header className='sticky top-0 z-50  w-full flex justify-between items-center px-4 py-2 sm:px-14 sm:py-4'>
            <img src={logo} alt="zonkart" className='w-18 sm:w-28' />
            <div className='border-2 p-2 rounded-2xl sm:flex hidden'>
                <form onSubmit={handleSubmit}>
                    <input ref={ref} placeholder='Search' type="text" className='text-xl outline-0 border-0' />
                </form>
            </div>

            <div className='flex gap-8'>
                <button className='text-m sm:text-xl bg-blue-500 text-white rounded-xl px-4 py-2'>Login</button>
                <Link to={'/cart'}><div className='flex gap-2 rounded-xl items-center bg-blue-500 text-white px-4 py-2 '>
                    <p className='text-m sm:text-xl flex items-center'>Cart</p>
                    <p className='text-m'>{select.length}</p>
                </div></Link>

            </div>
        </header>
    )
}

export default Header