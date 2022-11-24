const TodoItem = (props) => {
  const { id, title } = props;
  // const { id, title, done } = props;
  // console.log(props); // { todo: 'todo1' }
  // console.log(id); // 1
  // console.log(title); // 'todo1
  // console.log(done); // false

  const handleTodoEdit = (id) => {
    console.log('click edit btn', id);
  };

  const handleTodoDelete = (id) => {
    console.log('click delete btn', id);
  };

  return (
    <>
      <div className="TodoItem">
        <input type="checkbox" />
        <p>{title}</p>
        <button onClick={() => handleTodoEdit(id)}>EDIT</button>
        <button onClick={() => handleTodoDelete(id)}>DELETE</button>
      </div>
    </>
  );
};

export default TodoItem;
