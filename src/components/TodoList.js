import React, { useRef, useState } from "react";
function TodoList() {
  const temp = useRef();
  const [todosList, setTodosList] = useState([]);
  const addTodo = () => {
    console.log(temp);
    todosList.push(temp.current.value);
    setTodosList([...todosList]);
    temp.current.value = "";
  };
  return (
    <div>
      <input ref={temp} placeholder={"Add Todo"} type={"text"} />
      <br />
      <button onClick={() => addTodo()}>Add Todo</button>
      {todosList.map((value, index) => (
        <div key={index}>
          <h5>{value}</h5>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
