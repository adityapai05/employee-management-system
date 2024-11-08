import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [userData, setUserData] = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Created");
    const newTask = {
      title,
      description,
      date,
      assignTo,
      category,
      isActive: false,
      isNew: true,
      isFailed: false,
      isCompleted: false,
    };
    const data = userData;

    data.forEach((ele) => {
      if (assignTo === ele.firstName + " " + ele.lastName) {
        ele.tasks.push(newTask);
        ele.taskCount.new = ele.taskCount.new + 1;
      }
    });
    setUserData(data);
    console.log("Data: ", data);
    setTitle("");
    setAssignTo("");
    setCategory("");
    setDate("");
    setDescription("");
  };

  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-7 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 rounded">
        <form
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:flex-wrap"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full sm:w-1/2">
            <div>
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
                Task Title
              </h3>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI Design"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
                Date
              </h3>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] text-gray-300 border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
                Assign To
              </h3>
              <select
                className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
              >
                {userData.map((ele) => {
                  return (
                    <option className="bg-[#1c1c1c]">
                      {ele.firstName + " " + ele.lastName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
                Category
              </h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Design, Development, etc..."
              />
            </div>
          </div>
          <div className="w-full sm:w-2/5 flex flex-col items-start">
            <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-gray-300 mb-0.5">
              Description
            </h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-44 text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              cols="30"
              rows="10"
              maxLength="200"
              placeholder="Detailed Description (Max. 200 characters)"
            ></textarea>
            <button className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded-lg text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;