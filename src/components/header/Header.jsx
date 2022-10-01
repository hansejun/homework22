import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
function Header() {
  return (
    <Container>
      <span>마이 투두 리스트</span>
      <span>리액트</span>
    </Container>
  );
}

export default Header;
