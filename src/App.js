import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import TodoBackground from "./components/TodoBase";
import { TodoProvider } from "./context/TodoContext";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
import DeleteDialog from "./components/DeleteDialog";

const BodyStyle = createGlobalStyle`
body{
  background: url("https://picsum.photos/1000?blur=1") no-repeat;
  background-size: cover;
  background-attachment: scroll;
}
`;

const fadeInAndOut = keyframes`
0%, 100%{
  opacity:0;
}
50%{
  opacity:1
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

const SaveMessage = styled.div`
  width: 30%;
  font-size: 1.3rem;
  font-weight: 700;
  background: #fff;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 10px;
  opacity: 0;
  box-shadow: 0 0 12px #000;

  ${(props) =>
    props.save &&
    css`
      animation: ${fadeInAndOut} 1s ease-in;
    `}
`;

function App() {
  const [isSave, setIsSave] = useState(false);
  const [switchDial, setSwitchDial] = useState(false);

  return (
    <TodoProvider>
      <BodyStyle />
      <TodoBackground />
      <ButtonContainer setIsSave={setIsSave} setSwitchDial={setSwitchDial} />
      <SaveMessage save={isSave}>로컬에 저장되었습니다.</SaveMessage>
      <AlertMsg>저장하지 않은 내용은 삭제됩니다.</AlertMsg>
      {switchDial && <DeleteDialog setSwitchDial={setSwitchDial} />}
    </TodoProvider>
  );
}

export default App;
