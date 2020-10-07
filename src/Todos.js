import React from 'react';
import "./Todos.css";
import Todo from "./Todo";



const Todos = ({todos}) => {
    return ( 
        <ul className="Scrollable">
          {todos.map(todo=>{
            return(
              <Todo todo={todo}/>
            )
          })} 
        </ul>
     );
}
 
export default Todos;