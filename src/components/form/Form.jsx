import { useState } from "react";
import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const FormBox = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 10px;
    font-size: 500;
  }
  input {
    margin-right: 10px;
    padding: 10px;
    width: 300px;
  }
`;
const FormBtn = styled.button`
  width: 120px;
  padding: 15px 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  cursor: pointer;
`;

function Form({ setTodo, index, setIndex }) {
  const [content, setContent] = useState({ title: "", text: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    // [{id: 0, title: "", body: "", isDone: false},{id: 1, title: "", body: "", isDone: false},{id:2 title: "", body: "", isDone: false},]
    setTodo((prev) => [...prev, { id: index, ...content, isDone: false }]);
    setIndex((prev) => prev + 1);
    setContent({ title: "", text: "" });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
    console.log(content);
  };
  return (
    <Container onSubmit={onSubmit}>
      <FormBox>
        <span>제목</span>
        <input
          type="text"
          name="title"
          value={content.title}
          onChange={onChange}
        />
        <span>내용</span>
        <input
          type="text"
          name="text"
          value={content.text}
          onChange={onChange}
        />
      </FormBox>
      <FormBtn>제출</FormBtn>
    </Container>
  );
}

export default Form;