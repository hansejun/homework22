import styled from "styled-components";
import ToDo from "../todo/Todo";

function List({ title, todos }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Todos>
        {todos.map((item, i) => (
          <ToDo key={i} todo={item} />
        ))}
      </Todos>
    </Container>
  );
}
export default List;

const Container = styled.div`
  padding: 30px;
  > h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  margin-bottom: 30px;
`;
const Todos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  gap: 20px;
`;
