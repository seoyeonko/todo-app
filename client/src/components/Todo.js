import React, { useState } from 'react';

const Todo = (props) => {
  // const { id, title, done } = props.item;
  const [todoItem, setTodoItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const { deleteItem } = props;

  const deleteEventHandler = () => {
    deleteItem(todoItem);
  };

  // title 클릭시 실행될 함수
  // : readOnly false로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  // readOnly true
  // : enter키 누르면 readOnly 모드 종료
  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      // TODO: 가짜 데이터에서는 단순히 true로 변경하지만 API 연결시 update api 불러와 서버에 바뀐 아이템 저장할 예정
      setReadOnly(true);
    }
  };

  // 커서가 깜빡인다고 수정 가능한 것은 아님
  // 사용자가 키보드 입력할 때마다 item 새 값으로 변경
  const editEventHandler = (e) => {
    // rest: id, done 정보
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  // checkbox 업데이트
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    setTodoItem({
      done: !todoItem.done,
      ...rest,
    });
  };

  // useEffect(() => {
  // console.log('readOnly', readOnly);
  // console.log(todoItem);
  // console.log(todoItem.done);
  // });

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${todoItem.id}`}
        name={`todo${todoItem.id}`}
        defaultChecked={todoItem.done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${todoItem.id}`}>{todoItem.title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onKeyPress={enterKeyEventHandler}
        onChange={editEventHandler}
      />
      <button onClick={deleteEventHandler}>DELETE</button>
    </div>
  );
};

export default Todo;
