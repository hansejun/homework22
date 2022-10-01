import { useState } from "react";
import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";
function TodoList() {
  const [todo, setTodo] = useState([]);
  const [index, setIndex] = useState(0);

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
