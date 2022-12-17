import React from "react";
import './Todoitem.css'

const Todoitem: React.FC<{text:string; onRemoveTodo:()=>void}>=(props)=>{
    return( 
       <li className="item" onClick={props.onRemoveTodo}>{props.text}</li> 
    )
}
export default Todoitem;