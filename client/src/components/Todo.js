import React from 'react';

const Todo = (props) => {
  const { id, title, done } = props.item;

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        defaultChecked={done}
      />
      <label htmlFor={`todo${id}`}>{title}</label>
    </div>
  );
};

export default Todo;
