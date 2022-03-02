import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { handleAdd, handleDone, handleDelete } from "../Redux/Actions"


const ListToDo =({task})=>{
    const tasks = useSelector(state => state.tasks)
    const [inpt, setInpt] = useState("");
    const dispatch = useDispatch()
    return(
        <div className='list'>
            {tasks.map((task)=>(
                <div>
           
            <h2 className={task.isDone && "chateb"}>{task.desc}</h2>
            <h3>{task.isDone ? "true" : "false"}</h3>
            <button onClick={() => dispatch(handleDone(task.id))}>
            {task.isDone ? "Undone" : "Done"}
            </button>
            <button onClick={() => dispatch(handleDelete(task.id))}>Delete</button>
          </div>
           ))}
        <br/>
        <input  value={inpt} onChange={(e) => setInpt( e.target.value)}/>
        <button onClick={() => {dispatch(handleAdd(inpt));setInpt('')}}> Add </button>
        </div>
    )
    }


export default ListToDo