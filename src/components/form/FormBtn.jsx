import styled from "styled-components";
const Btn = styled.button`
  width: 120px;
  padding: 15px 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  cursor: pointer;
`;

function FormBtn({ children }) {
  return (
    <>
      <Btn>{children}</Btn>
    </>
  );
}

export default FormBtn;
