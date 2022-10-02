import { useState } from "react";
import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";
import { useRef } from "react";

function TodoList() {
  const [todo, setTodo] = useState([
    { id: 0, title: "밥먹기", text: "밥!", isDone: false },
    { id: 1, title: "잠자기", text: "잠!", isDone: true },
  ]);
  const indexRef = useRef(2);
  return (
    <>
      <Layout>
        <Form setTodo={setTodo} index={indexRef} />
        <List todo={todo} setTodo={setTodo}></List>
      </Layout>
    </>
  );
}
export default TodoList;
// <Form setTodo={setTodo} index={index} setIndex={setIndex}></Form>
//const [index, setIndex] = useState(2); // Date.now()도 중복없는 인덱싱 가능
