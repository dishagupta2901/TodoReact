import { useState } from "react";
import TaskItem from "./TaskItem.tsx";

const TaskList = ({ taskList, setTaskList }) => {
  const [editedTaskName, setEditedTaskName] = useState();

        //taskList.indexOf(task)
      const DeleteTask = (task) => {
        const tempList = [...taskList];
        const index = taskList.indexOf(task);
        console.log(task, tempList, taskList, index);
        tempList.splice(index, 1);
        setTaskList([...tempList]); 
      };

      const saveTask = (task, editedTaskName) =>{
        const tempList = [...taskList];
        const index = taskList.indexOf(editedTaskName);
        console.log(task, tempList, taskList, index, editedTaskName);
        tempList.splice(index, 1, task);
        setTaskList([...tempList]); 
      }

      const updateTaskList = (task, actionName?:"") => {
        console.log(task, taskList.indexOf(task), editedTaskName, actionName);
        if(actionName === "Edit"){
          // setIsInputDisabled(false);
          console.log("editing...", task, actionName, editedTaskName);
          
          setEditedTaskName(task);
        }else if(actionName === "Delete"){
          DeleteTask(task);
        }
        else if(actionName === "save"){
          // setTaskList(taskList.splice(taskList.indexOf(task), 1), editedTaskName);
          saveTask(task, editedTaskName)
        }
        
      };

    return (
      <div className="align-middle relative">
        <ul className="m-2 p-2 border w-9/12 bg-blue-300 rounded-md justify-center">
          {taskList.map((task, index) => (
            <TaskItem 
                task={task}
                key={index}
                updateTaskList={updateTaskList}
                // isInputDisable={isInputDisable}
              />
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskList;
  