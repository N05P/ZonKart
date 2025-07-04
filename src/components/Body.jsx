import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import NewLayout from './NewLayout'
import Home from './Home'
import Cart from './Cart'
import Products from './Products'
import ProductDetails from './ProductDetails'
import { Link } from 'react-router'

const Body = () => {
    const route = createBrowserRouter([
        {
            path:"/",
            element:<NewLayout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                },
                {
                    path:"/box/:name",
                    element:<Products/>
                },
                {
                    path:'/product/:id',
                    element:<ProductDetails/>
                },
                {
                    path:'/cart',
                    element:<Cart/>
                }
            ]
        }
    ])
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default Body