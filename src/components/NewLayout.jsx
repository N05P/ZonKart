import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router'


const NewLayout = () => {
  return (
    <div className='flex min-screen flex-col'>
    <Header/>
    <main className='flex-1'>
    <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default NewLayout