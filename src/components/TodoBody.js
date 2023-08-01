import styled from "styled-components";
import { useTodoState } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const BodyBackground = styled.div`
  width: 100%;
  height: 490px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TodoBody = () => {
  const list = useTodoState();
  return (
    <BodyBackground>
      {list.map((v) => (
        <TodoItem key={v.id} id={v.id} text={v.text} done={v.done} />
      ))}
    </BodyBackground>
  );
};

export default TodoBody;
