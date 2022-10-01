import styled from "styled-components";
import Header from "../header/Header";

const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  margin: 0 auto;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
`;
function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
export default Layout;
