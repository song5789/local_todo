import styled from "styled-components";
import TodoHead from "./TodoHead";
import TodoBody from "./TodoBody";
import TodoCreate from "./TodoCreate";

const Background = styled.div`
  width: 50%;
  margin: 3rem auto;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 10px #fff;
`;

const TodoBackground = () => {
  return (
    <Background>
      <TodoHead />
      <TodoBody />
      <TodoCreate />
    </Background>
  );
};

export default TodoBackground;