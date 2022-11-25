import React, { useState } from 'react';

const Todo = (props) => {
  // const { id, title, done } = props.item;
  const [todoItem, setTodoItem] = useState(props.item);
  const { deleteItem } = props;

  const deleteEventHandler = () => {
    deleteItem(todoItem);
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${todoItem.id}`}
        name={`todo${todoItem.id}`}
        defaultChecked={todoItem.done}
      />
      <label htmlFor={`todo${todoItem.id}`}>{todoItem.title}</label>
      <button onClick={deleteEventHandler}>DELETE</button>
    </div>
  );
};

export default Todo;
