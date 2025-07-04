import React from 'react'
import { useParams } from 'react-router'
import { useCategories } from '../hooks/useCategories';
import CardProduct from './CardProduct';


const Products = () => {
    const {name} = useParams();
    const data = useCategories(name);
  return (
  <div className='grid grid-cols-3 w-fit gap-18 mx-auto '>
    {
      data?.map((item)=>{
        return(
       
        <CardProduct item={item}/>)
      })
    }
  </div>
  )
}

export default Products