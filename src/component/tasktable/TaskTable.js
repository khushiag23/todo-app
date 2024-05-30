export default function TaskTable({taskList,setTaskList,tabstatus,setTabstatus,priorityList,setpriorityList,changeTaskStatus,removeTask}){
    return <>
    <div className="row mt-3 mb-3">
            <div className="col-12">
            <button disabled = {tabstatus == "Active" ? true : false} onClick={()=>setTabstatus("Active")} className="btn btn-danger">Active({taskList.filter((task)=>task.status=="Active").length})</button>
            <button disabled = {tabstatus == "Deactive" ? true : false} onClick={()=>setTabstatus("Deactive")} className="btn btn-success ml-2">Deactive({taskList.filter((task)=>task.status=="Deactive").length})</button>
            </div>
        </div>
    <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Title</th>
                    <th>Priority</th>
                    <th>Created Date</th>
                    <th>Change Task Status</th>
                </tr>
            </thead>
            <tbody>
                {taskList.filter((task)=>task.status==tabstatus).sort((a,b)=>a.priorityId-b.priorityId).map((task,index)=><tr style={{backgroundColor: task.priorityId==1 ? "red" : task.priorityId==2 ? "orange" : "green"}} key={index}>
                    <td>{index+1}</td>
                    <td>{task.title}</td>
                    <td>{priorityList.find((priorityObj)=>priorityObj.pid==task.priorityId).priorityValue}</td>
                    <td>{task.createdDate}</td>
                    <td>{tabstatus == "Active" ? <button className="btn btn-secondary" onClick={ () => changeTaskStatus('Deactive',task)} >Deactive</button> : <button onClick={() => changeTaskStatus('Active',task)} className="btn btn-secondary">Active</button>}</td>
                    <td><button onClick={() => removeTask(task)} className="btn btn-info">Remove</button></td>

                </tr>)}
            </tbody>
            </table>
    
    
    </>
}