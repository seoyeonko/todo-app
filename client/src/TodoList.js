import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = () => {
  // const todos = [
  //   {
  //     id: 1,
  //     title: 'todo1',
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'todo2',
  //     done: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'todo3',
  //     done: false,
  //   },
  //   {
  //     id: 4,
  //     title: 'todo4',
  //     done: false,
  //   },
  //   {
  //     id: 5,
  //     title: 'todo5',
  //     done: false,
  //   },
  //   {
  //     id: 6,
  //     title: 'todo6',
  //     done: false,
  //   },
  // ];
  const [todos, setTodos] = useState([]);

  // 처음 렌더링 될 때만 전체 목록 불러오기
  useEffect(() => {
    console.log('첫 렌더링 완료');
    const getTodos = async () => {
      let res = await axios.get('http://localhost:8000/api/todos');
      setTodos(res.data);
    };
    getTodos();
  }, []);

  return (
    <>
      <h1>TodoList</h1>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            done={todo.done}
          />
        );
      })}
    </>
  );
};

export default TodoList;
