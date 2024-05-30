export default function ToDoForm({taskPriorityInput,taskTitleInput,priorityList,setPriorityList,addTask}){
    return<>
    <div className="row mt-2 mb-3">
    <div className="col-md-6">
       <input ref={taskTitleInput} type="text" placeholder="Enter Task Title" className="form-control"/>
    </div>
    <div className="col-md-6">
       <select ref={taskPriorityInput} className="form-control">
         {priorityList.map((priority,index) => <option value={priority.pid }>{priority.priorityValue}</option>)}
      </select> 
    </div>
</div>
<div className="row mt-2 mb-2"> 
   <div className="col-12">
      <button onClick={addTask} className="btn btn-secondary">ADD</button>
   </div>
</div> 
</>
}
