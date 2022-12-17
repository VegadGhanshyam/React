import React from "react";
import Todo from "../Model/Todo";
import Todoitem from "./Todoitem";
import './ToDOs.css'

const ToDos: React.FC<{ item: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul className="todos">
            {props.item.map((item) => (
                <Todoitem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
            ))}
        </ul>

    )
};
export default ToDos;