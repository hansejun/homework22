import styled from "styled-components";

const ToDoItem = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  div {
    display: flex;
    justify-content: space-between;
    button {
      width: 40%;
      height: 35px;
      border: none;
      cursor: pointer;
      &:first-child {
        color: white;
        background-color: rgba(0, 0, 0, 0.8);
      }
      &:last-child {
        color: black;
        border: 1px solid rgba(0, 0, 0, 0.8);
        background-color: white;
        cursor: pointer;
      }
    }
  }
`;

function ToDo({ title, text, id, isWorking, setTodo, todo }) {
  const onDelete = () => {
    setTodo((prev) => {
      const targetIdx = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, targetIdx), ...prev.slice(targetIdx + 1)];
    });
  };
  const onToggle = () => {
    setTodo((prev) => {
      const targetIdx = prev.findIndex((item) => item.id === id);
      return [
        ...prev.slice(0, targetIdx),
        { ...prev[targetIdx], isDone: !prev[targetIdx]["isDone"] },
        ...prev.slice(targetIdx + 1),
      ];
    });
  };

  return (
    <ToDoItem>
      <h1>{title}</h1>
      <p>{text}</p>
      <div>
        <button onClick={onDelete}>삭제</button>
        {isWorking ? (
          <button onClick={onToggle}>완료</button>
        ) : (
          <button onClick={onToggle}>취소</button>
        )}
      </div>
    </ToDoItem>
  );
}
export default ToDo;

// var foo = {["a"]: "b"};
// var foo = {"a": "b"};
