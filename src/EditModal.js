import React, { useState } from 'react'
import db from './firebase';
import "./EditModal.css"

function EditModal({open, setOpen, todo}) {
    const [input,setInput]=useState(todo.todo);
    const update=(event)=>{
        db.collection("todos").doc(todo.id).set({
            todo: input
        },{ merge: true})
        setOpen(false) 
    }  
    return (
        <div>
            <form action="">
                <input className="translucent roundedCorner" type="text" value={input} onChange={event=>setInput(event.target.value)}/>
                <button className="roundedCorner" onClick={update}>Save Changes</button>
            </form>
          
        </div>
      )
}

export default EditModal
