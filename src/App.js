import styled, { createGlobalStyle } from "styled-components";
import TodoBackground from "./components/TodoBase";
import { TodoProvider } from "./context/TodoContext";
import ButtonContainer from "./components/ButtonContainer";

const BodyStyle = createGlobalStyle`
body{
  background: url("https://picsum.photos/1000?blur=1") no-repeat;
  background-size: cover;
  background-attachment: scroll;
}
`;

const AlertMsg = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  background: #fff;
  border-radius: 2px;
  font-size: 1.2rem;
  font-weight: 600;
`;

function App() {
  return (
    <TodoProvider>
      <BodyStyle />
      <TodoBackground />
      <ButtonContainer />
      <AlertMsg>저장하지 않은 내용은 삭제됩니다.</AlertMsg>
    </TodoProvider>
  );
}

export default App;
