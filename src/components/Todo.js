import React, { useRef, useState } from "react";
import TodoList from "./TodoList";
function Todo() {
  const todoTitle = useRef();
  const [title, setTitle] = useState();
  const showValue = () => {
    setTitle(todoTitle.current.value);
  };
  return (
    <div>
      <input ref={todoTitle} type={"text"} placeholder={"Todo Title"} />
      <br />
      <button onClick={() => showValue()}>Set Todo Title</button>
      <h1>{title}</h1>
      {title ? <TodoList /> : null}
    </div>
  );
}

export default Todo;
