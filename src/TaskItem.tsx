import { useEffect, useState } from "react"

const TaskItem = ({task, updateTaskList}) =>{
    const [taskName, setTaskName] = useState(task);
    const [isInputDisabled, setIsInputDisabled] = useState<boolean>(true);

    useEffect(()=>{
        console.log("Always set task at initial render", task)
        setTaskName(task);
    },[]);

    return (    
        <div className="m-2 p-1 border w-9/12 bg-gray-300 rounded-md justify-start">
            {isInputDisabled ? 
                <>
                <span  className="m-2 p-2 w-6/12 rounded-md text-left">{task}</span>
                <button 
                    className="my-2 ml-12 p-2 border bg-blue-500 rounded-lg"
                    onClick={()=> {
                        setIsInputDisabled(false);
                        // setEditedTaskName(task);
                        updateTaskList(task, "Edit")
                    }}>Edit</button>
                </> : 
                
                <>
                    <input className="m-2 p-2 border w-6/12 bg-gray-200 rounded-md hover: bg-white" 
                        value={taskName} disabled={isInputDisabled} 
                        onChange={(e) => setTaskName(e.target.value)}></input>
                    <button 
                        className="my-2 ml-12 p-2 border bg-blue-500 rounded-lg"
                        onClick={()=>{ 
                            setIsInputDisabled(true);
                            updateTaskList(taskName, "save")
                        }}>Save</button>
                </>}
            
            
            
            <button 
                className="my-2 ml-2 p-2 border bg-blue-500 rounded-lg"
                onClick={()=> updateTaskList(task, "Delete")}>Delete</button>
                
        </div>
            );
}

export default TaskItem;