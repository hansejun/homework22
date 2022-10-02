import styled from "styled-components";

const InputBar = styled.input`
  margin-right: 10px;
  padding: 10px;
  width: 300px;
`;
function Input({ type, name, value, inputFn }) {
  return (
    <InputBar type={type} name={name} value={value || ""} onChange={inputFn} />
  );
}

export default Input;
/*
<Input
          type="text"
          name="text"
          value={content.text}
          onChange={onChange}
        />
        */
