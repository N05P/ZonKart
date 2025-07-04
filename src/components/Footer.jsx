import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='w-screen bg-black/50 hover:bg-black text-white flex justify-center'>
            <h1>Back to Top</h1>
        </div>
        <div className='w-screen px-14  text-black/70 py-2 flex justify-between'>
            <h1>@2025  ZonKart</h1>
            <div className='flex gap-4'>
                <p className='hover:text-black cursor-pointer'>Instagram</p>
                <p className='hover:text-black cursor-pointer'>Github</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer