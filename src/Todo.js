import React, { useState } from "react";
import EditModal from "./EditModal";
import db from "./firebase";
import Delete from "./delete_24px.svg";

function Todo({ todo }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = (todo) => setOpen(true);
  return (
    <div>
      <li className="todo">
        <div>
          <h4 onClick={toggleOpen}>
            <span style={{ fontWeight: 700, color: "#F29A52" }}>to-do: </span>
            {todo.todo}
          </h4>
        </div>
        <div
          onClick={(event) => db.collection("todos").doc(todo.id).delete()}
          className="delbutton"
        >
          <img className="delicon" src={Delete} alt="" />
        </div>
      </li>
      {open && <EditModal todo={todo} open={open} setOpen={setOpen} />}
    </div>
  );
}

export default Todo;
