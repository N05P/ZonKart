import React from 'react'
import { useCategroriesApi } from '../hooks/useCategroriesApi'
import { useSelector } from 'react-redux';
import ShimmerCard from './ShimmerUI';

const Card = ({item}) => {

    const data = useCategroriesApi(item.url);
    const dat = useSelector((Store)=>Store.apidata);
    
  return (
    data.length==0?(<ShimmerCard/>):
    <div className='flex flex-col rounded-xl items-center bg-orange-500 m-2'>
        <img src={data} className='w-50' loading='lazy' alt="" />
        <h1 className='text-2xl text-white'>{item.name}</h1>
    </div>
  
  )
}

export default Card