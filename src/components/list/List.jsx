import styled from "styled-components";
import ToDo from "../todo/Todo";
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
function List({ title, todo, onToggle, onDelete }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Todos>
        {todo.map((item, i) => (
          <ToDo
            key={i}
            text={item.text}
            title={item.title}
            id={item.id}
            isWorking={true}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </Todos>
    </Container>
  );
}
export default List;
