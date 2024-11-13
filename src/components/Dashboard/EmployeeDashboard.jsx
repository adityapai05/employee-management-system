import React, { useState } from 'react';
import Header from '../others/Header';
import TaskCounter from '../others/TaskCounter';
import TaskList from '../TaskList/TaskList';

function EmployeeDashboard({ data, changeUser }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // State for category filter
  console.log("Data in dashboard: ",data);
  
  // Filter tasks based on search query and selected category
  const filteredTasks = data.tasks.filter((task) => {
    const matchesSearchQuery = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? task.category === selectedCategory : true;
    return matchesSearchQuery && matchesCategory;
  });

  return (
    <div className='p-3 sm:p-6 md:p-8 lg:p-12 xl:p-10 bg-[#1C1C1C] sm:h-screen'>
      <Header changeUser={changeUser} data={data} />

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-5 sm:gap-3">
        {/* Task Category Filter */}
        <div className="flex-1 sm:w-1/3 mb-4 sm:mb-0">
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-[#333333] text-white p-3 rounded border-2 border-[#555555] w-full focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
          >
            <option value="">All Categories</option>
            {Array.from(new Set(data.tasks.map((task) => task.category)))
              .map((category) => (
                <option key={category} className="bg-[#1c1c1c]">
                  {category}
                </option>
              ))}
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex-1 sm:w-2/3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tasks"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#333333] text-white p-2.5 pr-10 rounded border-2 border-[#555555] w-full focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <TaskCounter data={data} />
      <TaskList data={{ ...data, tasks: filteredTasks }} />
    </div>
  );
}

export default EmployeeDashboard;
