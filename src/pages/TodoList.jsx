import { useState } from "react";
import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";
function TodoList() {
  const [todo, setTodo] = useState([
    { id: 0, title: "밥먹기", text: "밥!", isDone: false },
    { id: 1, title: "잠자기", text: "잠!", isDone: true },
  ]);
  const [index, setIndex] = useState(2);

  return (
    <>
      <Layout>
        <Form setTodo={setTodo} index={index} setIndex={setIndex}></Form>
        <List todo={todo} setTodo={setTodo}></List>
      </Layout>
    </>
  );
}
export default TodoList;
