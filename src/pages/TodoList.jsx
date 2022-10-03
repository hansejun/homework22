import { useState } from "react";
import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";
import { useRef } from "react";
import { useCallback } from "react";

function TodoList() {
  const [todo, setTodo] = useState([
    { id: 0, title: "밥먹기", text: "밥!", isDone: false },
    { id: 1, title: "잠자기", text: "잠!", isDone: true },
  ]);
  const [content, setContent] = useState({ title: "", text: "" });

  const indexRef = useRef(2);

  const onDelete = useCallback((id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id) || []);
  }, []);

  const onToggle = useCallback((id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setTodo((prev) => [
      ...prev,
      { id: indexRef.current++, ...content, isDone: false },
    ]);
    setContent({ title: "", text: "" });
  };

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setContent({
        ...content,
        [name]: value,
      });
    },
    [content, setContent]
  );

  return (
    <>
      <Layout>
        <Form
          data={content}
          setContent={setContent}
          onSubmit={onSubmit}
          onChange={onChange}
        />
        <List
          todo={todo.filter((item) => !item.isDone)}
          setTodo={setTodo}
          onDelete={onDelete}
          onToggle={onToggle}
          title={"Working"}
        />
        <List
          todo={todo.filter((item) => item.isDone)}
          setTodo={setTodo}
          onDelete={onDelete}
          onToggle={onToggle}
          title={"Done"}
        />
      </Layout>
    </>
  );
}
export default TodoList;
