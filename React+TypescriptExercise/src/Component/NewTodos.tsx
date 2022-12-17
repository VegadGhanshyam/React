import { useRef } from "react";
import './NewTodos.css'

const NewTodos: React.FC <{todoAdd:(text:string)=>void}> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enterText = textInputRef.current!.value

        if (enterText.trim().length === 0) {
            return;

        }
        props.todoAdd(enterText)
    }
    

    return (
        <form onSubmit={submitHandler} className="form">
            <label htmlFor="text">TODO LISTS</label>
            <input type='text' id="text" ref={textInputRef} />
            <button>Add Todo</button>

        </form>
    )
};
export default NewTodos;