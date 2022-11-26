import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import './App.css';
import { API_BASE_URL } from './app-config'; // defulat export가 아니였으므로 {} 즁괄호로 감싸주어야 함

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log('첫 렌더링 완료');
    const getTodos = async () => {
      let res = await axios.get(`${API_BASE_URL}/api/todos`);
      setTodoItems(res.data);
    };
    getTodos();
  }, []);

  // AddTodo 컴포넌트는 상위 컴포넌트 items에 접근 불가능
  // 상위 컴포넌트인 App은 AddTodo에 접근 가능
  // => App 컴포넌트에 add() 함수 추가하고 해당 함수를 AddTodo 프로퍼티로 넘겨 AddTodo에서 아용
  const addItem = async (item) => {
    // item.id = todoItems.length + 1; // key를 위한 id 추가
    // item.done = false; // done 초기화
    // // 기존 아이템 유지하고 새로운 아이템 추가
    // // 기존 아이템: ...todoItems
    // // 새로운 아이템 추가: e.target.value
    // setTodoItems([...todoItems, item]);

    // // todoItems.push(item);
    // // setTodoItems(todoItems);

    const res = await axios.post(`${API_BASE_URL}/api/todo`, item);
    // 기존 아이템: ...todoItems
    // 새로운 아이템: res.data ( {id: 15, title: 'bb', done: false} )
    setTodoItems([...todoItems, res.data]);
  };

  const deleteItem = async (item) => {
    await axios.delete(`${API_BASE_URL}/api/todo/${item.id}`);
    const newTodoItems = todoItems.filter((e) => e.id !== item.id);
    setTodoItems(newTodoItems);
  };

  const updateItem = async (item) => {
    console.log(item);
    await axios.patch(`${API_BASE_URL}/api/todo/${item.id}`, item);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {/* <Todo item={todoItems[0]} />
      <Todo item={todoItems[1]} />
      <Todo item={todoItems[2]} /> */}

      {todoItems.map((item) => {
        return (
          <Todo
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        );
      })}
    </div>
  );
}

export default App;
