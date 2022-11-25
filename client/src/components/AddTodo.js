import React, { useState } from 'react';

const AddTodo = (props) => {
  const { addItem } = props;
  const [todoItem, setTodoItem] = useState({
    title: '',
  }); // 사용자 입력을 저장할 객체

  // 컴포넌트 state에 추가할 Todo 기억하기
  const onInputChange = (e) => {
    setTodoItem({ title: e.target.value });
    // console.log(todoItem);
  };

  // Add 핸들러 추가 (부모 컴포넌트 App에서 add 함수를 props로 받아옴)
  const onButtonClick = () => {
    addItem(todoItem); // add 함수 사용
    setTodoItem({
      title: '',
    }); // 상태 초기화
  };

  // Enter 키 입력시 아이템 추가
  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add Todo here"
        value={todoItem.title}
        onChange={onInputChange}
        onKeyPress={enterKeyEventHandler}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
};

export default AddTodo;
