import React, { useState } from "react";
import TaskList from "./TaskList.tsx";

const Todo = () => {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const AddTask = () => {
    console.log(taskName);
    setTaskList([...taskList, taskName]);
    setTaskName("");
  };

  return (
    <div>
      <div >
        <input
          type="text"
          className="inputTask m-2 p-2 w-2/12 border-black bg-gray-300 rounded-md hover: border-white"
          placeholder="Enter Your Todo"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
            className = "m-10 p-2 border-blue-500 bg-blue-600 w-1/12 rounded-lg"
          onClick={() => {
            AddTask();
          }}
        >
          Add
        </button>
      </div>
      <TaskList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
};

export default Todo;
