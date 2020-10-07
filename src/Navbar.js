import React, { useEffect, useState } from "react";
import logo from "./file-text.svg";

function Navbar() {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 60000);

  useEffect(() => {}, [date]);

  let today = date.toDateString();
  let time = date.toLocaleTimeString().split(':');
  let newTime = `${time[0]}:${time[1]} ${time[2].split(' ')[1]? time[2].split(' ')[1]: ""}`

  return (
    <nav>
      <div className="todo__nav_logo">
        <img className="todo__logo" src={logo} alt="logo" />
        <h1>
          To<span className="Brown-orange">Do</span>
        </h1>
      </div>
      <div className="todo__nav_time">
        <h2>
          {today} {newTime}
        </h2>
      </div>
    </nav>
  );
}

export default Navbar;
