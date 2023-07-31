import { createGlobalStyle } from "styled-components";
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

function App() {
  return (
    <TodoProvider>
      <BodyStyle />
      <TodoBackground />
      <ButtonContainer />
    </TodoProvider>
  );
}

export default App;
