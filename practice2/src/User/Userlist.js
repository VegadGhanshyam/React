import React from "react";
import Card from "../Components/Card";
import classes from './Userlist.css'

const Userlist=(props)=>{
    return( 
        <Card className={classes.users}>
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age}years old)
                </li>
            ))}
        </ul>
        </Card>
    );
};
export default Userlist;