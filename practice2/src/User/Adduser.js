import React,{useState} from "react";
import Card from "../Components/Card";
import classes from'./Adduser.css';
import Button from "../Components/UI/Button";
import ErrorModal from "../Components/UI/ErrorModal";
const Adduser=(props)=>{

    const [enterUsername,setenterUsername]=useState('');
    const [enterUserAge,setenterUserAge]=useState('');
    const [error,seterror]=useState('');
    const adduserHandler=(event)=>{
        event.preventDefault();

        if(enterUsername.trim().length===0 || enterUserAge.trim().length===0){
            seterror({
                title:'Invalid Input',
                message:"Please enter the valid name and age (non empty is not allow)"
            })
            return;
        };
        if(+enterUserAge<1){
            seterror({
                title:'Invalid age',
                message:"Please enter the valid age negative age is not acceptable.(non empty is not allow)"
            })
            return;
        }
      
        props.onadduser(enterUsername,enterUserAge);
        setenterUsername('');
        setenterUserAge('');

    };
    const usernameChange=(event)=>{
        setenterUsername(event.target.value);
    };
    const userageChange=(event)=>{
        setenterUserAge(event.target.value);
    };
    const errorHandler=()=>{
        seterror(null);
    }



    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={adduserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type='text' value={enterUsername} onChange={usernameChange}/>
            <label htmlFor="age">Age</label>
            <input id="age" type='number' value={enterUserAge} onChange={userageChange}/>
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </div>
    );
};
export default Adduser;