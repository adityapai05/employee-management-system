import React from 'react'

const FailedTask = ({ ele }) => {
  return (
    <div className="h-full w-[20.5rem] bg-yellow-400 rounded-xl flex-shrink-0 p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center text-sm">
          <h3 className="bg-red-600 py-1 px-4 rounded">{ele.category}</h3>
          <h4>{ele.date}</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">{ele.title}</h2>
        <p className="text-base mt-5 font-medium">
          {ele.description}
        </p>
      </div>
      <div className="mt-auto">
        <button  disabled className="w-full bg-red-500  cursor-default rounded-lg font-medium py-3 px-2 text-base">
          Task Failed
        </button>
      </div>
    </div>
  );
}

export default FailedTask;
