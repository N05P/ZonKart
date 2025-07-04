import React, { useState } from 'react'
import Card from './Card';
import { useEffect } from 'react';
import { useCategoryApi } from '../hooks/useCategoryApi'
import { useDispatch, useSelector } from 'react-redux';
import { addApiData } from '../utils/Redux/ApiSlice';
import NothingPresent from './Nothing';
import { Link } from 'react-router';
import ShimmerCard from './ShimmerUI';

const Home = () => {

    const api = useSelector((Store)=>Store.apidata)

  return (
    <main className='min-h-screen px-14 py-2 '>
        {api.length==0?(<NothingPresent/>):(
        <div className='grid grid-cols-4'>
        {
            api?.map((item)=>{
                return(
                    <Link to={'/box/'+item.slug}><Card item={item}/></Link>
                )
            })
        }
        </div>
        )}
    </main>
  )
}

export default Home