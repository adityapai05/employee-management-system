import React from 'react'
import Header from '../others/Header'
import TaskCounter from '../others/TaskCounter'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard({data}) {
  console.log("Dashbboard : ",{data})
  return (
    <div className='p-16 bg-[#1C1C1C] h-screen'>
      <Header data={data}/>
      <TaskCounter data={data}/>
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard
