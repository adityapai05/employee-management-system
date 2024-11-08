import React from 'react'

function TaskCounter({data}) {
  return (
    <div className='flex justify-between gap-5 mt-10'>
        <div className='py-6 px-9 w-[45%] bg-blue-400 rounded-xl'>
            <h2 className='text-5xl font-bold'>{data.taskCount.new}</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='py-6 px-9 w-[45%] bg-green-400 rounded-xl'>
            <h2 className='text-5xl font-bold'>{data.taskCount.completed}</h2>
            <h3 className='text-2xl font-medium'>Completed Task</h3>
        </div>
        <div className='py-6 px-9 w-[45%] bg-yellow-400 rounded-xl'>
            <h2 className='text-5xl font-bold'>{data.taskCount.active}</h2>
            <h3 className='text-2xl font-medium'>Accepted Task</h3>
        </div>
        <div className='py-6 px-9 w-[45%] bg-red-400 rounded-xl'>
            <h2 className='text-5xl font-bold'>{data.taskCount.failed}</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskCounter
