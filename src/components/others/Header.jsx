// Header.js
import React from 'react'

function Header({data, changeUser}) {
  console.log("header data: ", {data})
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }
  const findUserName = () => {
    if(data)
      return data.firstName
    else
      return "Demo D"
  }
  return (
    <div className='flex flex-col sm:flex-row items-start sm:items-end justify-between'>
      <div className='flex-grow'>
        <h1 className='text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-medium'>Hello <br /> <span className='text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl text-yellow-400 font-bold'>{findUserName()} 👋</span></h1>
      </div>
      <button onClick={logOutUser} className='bg-red-500 hover:bg-red-600 py-2 px-5 rounded-sm text-lg font-semibold mt-4 sm:mt-0'>Log Out</button>
    </div>
  )
}

export default Header