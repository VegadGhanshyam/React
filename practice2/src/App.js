import React,{useState} from 'react';
import './App.css';
import Adduser from './User/Adduser';
import Userlist from './User/Userlist';

function App() {
  const[userlist,setUserlist]=useState([]);

  const adduser=(uName,uAge)=>{
    setUserlist((prevUserlist)=>{
      return [...prevUserlist,{name:uName, age:uAge, id:Math.random().toString()}];
    });
 

  }
  return (
    <div>
      <Adduser onadduser={adduser} />
      <Userlist users={userlist} />

    </div>
  );
}

export default App;
