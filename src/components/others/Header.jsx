import React from 'react'

function Header({data}) {
  console.log("header data: ",{data})
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    window.location.reload();
  }
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-4xl text-yellow-400 font-bold'>Username👋</span></h1>
      <button onClick={ logOutUser }className='bg-red-500 hover:bg-red-600 py-2 px-5 rounded-sm text-lg font-semibold '>Log Out</button>
    </div>
  )
}

export default Header
