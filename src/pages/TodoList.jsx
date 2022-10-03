import React, { useReducer, useState } from "react";
import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";

const initialState = [
  { id: 0, title: "밥먹기", text: "밥!", isDone: false },
  { id: 1, title: "잠자기", text: "잠!", isDone: true },
];

const todosReducer = (state, action) => {
  const { type, body } = action;
  switch (type) {
    case "CREATE":
      return [...state, { ...body }];
    case "TOGGLE":
      return state.map((item) =>
        item.id === body.id ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== body.id);
    default:
      return state;
  }
};

export const TodosDispatch = React.createContext(null);

function TodoList() {
  const [todos, todosDispatch] = useReducer(todosReducer, initialState);

  const [content, setContent] = useState({ title: "", text: "" });

  return (
    <>
      <TodosDispatch.Provider value={todosDispatch}>
        <Layout>
          <Form data={content} setContent={setContent} />
          <List
            todos={todos.filter((item) => !item.isDone)}
            title={"Working"}
          />
          <List todos={todos.filter((item) => item.isDone)} title={"Done"} />
        </Layout>
      </TodosDispatch.Provider>
    </>
  );
}
export default TodoList;
