import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  console.log("task list: ", { data });
  return (
    <div
      id="task-list"
      className="flex items-center justify-start gap-5 h-[60%] w-full mt-10 rounded-xl py-5 flex-nowrap overflow-x-auto scrollbar-hide"
    >
      {data.tasks.map((ele, idx) => {
        if (ele.isActive) return <AcceptTask key={idx} ele={ele}/>;
        else if (ele.isNew) return <NewTask key={idx} ele={ele} />;
        else if (ele.isCompleted) return <CompleteTask key={idx} ele={ele}/>;
        else if (ele.isFailed) return <FailedTask key={idx} ele={ele}/>;
      })}
    </div>
  );
}

export default TaskList;
