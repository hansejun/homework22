import { useCallback, useContext, useRef } from "react";
import styled from "styled-components";
import { TodosDispatch } from "../../pages/TodoList";
import FormBtn from "./FormBtn";
import Input from "./Input";
import useInput from "./useInput";

function Form() {
  const indexRef = useRef(2);
  const todosDispatch = useContext(TodosDispatch);
  const [data, onChange, reset] = useInput({ titie: "", text: "" });

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      todosDispatch({
        type: "CREATE",
        body: { id: indexRef.current, isDone: false, ...data },
      });
      indexRef.current += 1;
      reset();
    },
    [data, reset, todosDispatch]
  );

  return (
    <Container onSubmit={onSubmit}>
      <FormBox>
        <span>제목</span>
        <Input
          type={"text"}
          name={"title"}
          value={data.title}
          inputFn={onChange}
        />
        <span>내용</span>
        <Input
          type={"text"}
          name={"text"}
          value={data.text}
          inputFn={onChange}
        />
      </FormBox>
      <FormBtn>제출</FormBtn>
    </Container>
  );
}

export default Form;

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
`;
