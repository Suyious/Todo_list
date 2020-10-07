import React,{useState, useEffect} from 'react';
// import { Button, TextField ,} from '@material-ui/core';
import './App.css';
import Todos from "./Todos";
import Navbar from "./Navbar"
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos]=useState([]);
  const [input, setInput]=useState("");

  useEffect(()=>{
    db.collection("todos").orderBy('timestamp','desc').onSnapshot(snapshot=>{
      // console.log(snapshot.docs.map(doc=> doc.data()))
      setTodos(snapshot.docs.map(doc=> ({id:doc.id, todo: doc.data().todo, time: doc.timestamp})))
    })
  },[]);

  const addToDo=(event)=>{
    event.preventDefault();
    db.collection("todos").add({
      todo: input ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos ,input]);
    setInput("")
  }

  return (
    <div className="App">
      <div className="boxwidth">
        <Navbar/>
        <form action="">
          <input type="text" placeholder="Enter To-do here" value={input} onChange={event=> setInput(event.target.value) }/>
          <button disabled={!input} type="submit" onClick={addToDo} >Add to List</button>
        </form>
        <Todos todos={todos}/>
      </div>      
    </div>
  );
}

export default App;
