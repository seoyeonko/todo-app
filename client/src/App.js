import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'todo1',
      done: false,
    },
    {
      id: 2,
      title: 'todo2',
      done: false,
    },
    {
      id: 3,
      title: 'todo3',
      done: false,
    },
  ]);

  // AddTodo 컴포넌트는 상위 컴포넌트 items에 접근 불가능
  // 상위 컴포넌트인 App은 AddTodo에 접근 가능
  // => App 컴포넌트에 add() 함수 추가하고 해당 함수를 AddTodo 프로퍼티로 넘겨 AddTodo에서 아용
  const add = (item) => {
    item.id = todoItems.length + 1; // key를 위한 id 추가
    item.done = false; // done 초기화
    // 기존 아이템 유지하고 새로운 아이템 추가
    // 기존 아이템: ...todoItems
    // 새로운 아이템 추가: e.target.value
    setTodoItems([...todoItems, item]);

    // todoItems.push(item);
    // setTodoItems(todoItems);
  };

  return (
    <div className="App">
      <AddTodo add={add} />
      {/* <Todo item={todoItems[0]} />
      <Todo item={todoItems[1]} />
      <Todo item={todoItems[2]} /> */}

      {todoItems.map((item) => {
        return <Todo key={item.id} item={item} />;
      })}
    </div>
  );
}

export default App;
