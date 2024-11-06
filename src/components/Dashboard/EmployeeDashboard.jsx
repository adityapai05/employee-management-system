import React from 'react'
import Header from '../layout/Header'
import TaskCounter from '../layout/TaskCounter'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <div className='p-16 bg-[#1C1C1C] h-screen'>
      <Header />
      <TaskCounter />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
