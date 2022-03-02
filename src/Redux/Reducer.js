import { HANDLEDONE, HANDLEDELETE, HANDLEADD} from "./ActionsTypes";

const initialState = {
   
    tasks: [
        { desc: "Take shower", isDone: false, id: Math.random() },
        { desc: "Quit smoke", isDone: false, id: Math.random() },
        { desc: "Buy things", isDone: false, id: Math.random() }
      ],
      inpt: ""
}

const Reducer=(state = initialState,action)=>{
    switch (action.type) {

        case HANDLEDONE: return {...state,tasks : state.tasks.map((task)=>task.id===action.payload?{...task,isDone: !task.isDone}: task)}

        case HANDLEADD: return {...state, tasks :  [...state.tasks,{ desc: action.payload, isDone: false, id: Math.random()}]}

        case HANDLEDELETE: return {...state, tasks: state.tasks.filter((task)=>task.id !== action.payload)}
        
      
        
            
        default: return state
          
    }
}

export default Reducer