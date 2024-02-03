import styled from "styled-components";
import Bingo from "./components/Bingo";
import { Header2 } from "./styles/Headers";

const StyledApp = styled.div`
  background-color: var(--bg);
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <StyledApp>
      <Header2 style={{ marginBottom: "3rem" }}>Manningo</Header2>
      <Bingo />
    </StyledApp>
  );
};

export default App;
