import Header from "./header/Header";
import Data ,{ taskpriority } from '../data/Data';
import { useRef, useState } from "react";
import TaskTable from "../tasktable/TaskTable";
import ToDoForm from "../to-do-form/To-Do-Form";

export default function Home(){
    let taskTitleInput = useRef();
    let taskPriorityInput = useRef();

    const [taskList,setTaskList] = useState(Data);
    const [priorityList,setpriorityList] = useState(taskpriority);
    const [tabstatus,setTabstatus] = useState("Active")

    const changeTaskStatus = (status,task) => {
        let index = taskList.findIndex((taskObj) => taskObj.title == task.title);
        let taskToBeUpdate = taskList[index];
        taskList.splice(index,1);
        taskToBeUpdate.status = status;
        setTaskList([...taskList,taskToBeUpdate]);
    }
    const addTask = () =>{
        let title = taskTitleInput.current.value;
        let priorityId = taskPriorityInput.current.value;
        let createdDate = new Date();
        createdDate = createdDate.getDate()+"-"+(createdDate.getMonth()+1)+"-"+createdDate.getFullYear();

        setTaskList([...taskList,{ title , priorityId , status :"Active" , createdDate}])
         }
    const removeTask = (task)=>{
        if(window.confirm("Are you sure ?")){
         let index =  taskList.findIndex((taskObj)=>taskObj.title == task.title);
         taskList.splice(index,1);
         setTaskList([...taskList]);
        }
    } 
    return<>
       <Header/>
       <div className="container mt-5">
        <ToDoForm taskTitleInput={taskTitleInput} taskPriorityInput={taskPriorityInput} priorityList={priorityList} setpriorityList={setpriorityList} addTask={addTask} />
        
        <TaskTable taskList={taskList} setTaskList={setTaskList} tabstatus={tabstatus} setTabstatus={setTabstatus} priorityList={priorityList} setpriorityList={setpriorityList} changeTaskStatus={changeTaskStatus} removeTask={removeTask} />
       </div>
    </>

}