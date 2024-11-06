import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-4xl text-yellow-400 font-bold'>Aditya👋</span></h1>
      <button className='bg-red-500 py-2 px-5 rounded-sm text-lg font-semibold'>Log Out</button>
    </div>
  )
}

export default Header
