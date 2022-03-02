import { HANDLEADD, HANDLEDELETE, HANDLEDONE} from "./ActionsTypes"

export const handleDone=(payload)=>{
    return (
        {
                type : HANDLEDONE,
                payload 
        }
            )
}

export const handleAdd=(payload)=>{
    return(
        {
            type : HANDLEADD,
            payload
            
        }
    )
}

export const handleDelete=(payload)=>{
    return(
        {
            type : HANDLEDELETE,
            payload
        }
    )
}
