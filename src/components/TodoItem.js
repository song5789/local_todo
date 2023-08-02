import { useState } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdCreate } from "react-icons/md";
import { useTodoDispatch } from "../context/TodoContext";
import TodoUpdate from "./TodoUpdate";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 1.7rem;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const Update = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 1.7rem;
  cursor: pointer;
  &:hover {
    color: #6284f5;
  }
  display: none;
  margin-right: 1rem;
`;

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 12px;
  border-radius: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
    ${Update} {
      display: initial;
    }
    box-shadow: 0 0 8px #000;
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.checkdone &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.checkdone &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

export default function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const [view, setview] = useState(false);

  const toggleDone = () => {
    dispatch({ type: "TOGGLE", id });
  };
  const onRemove = () => {
    dispatch({ type: "REMOVE", id });
  };
  const toggleUpdate = () => {
    setview(!view);
  };

  return (
    <ItemBlock>
      <CheckCircle checkdone={done} onClick={toggleDone}>
        {done && <MdDone />}
      </CheckCircle>
      <Text checkdone={done}>{text}</Text>
      <Update onClick={toggleUpdate}>
        <MdCreate />
      </Update>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
      {view && <TodoUpdate id={id} text={text} toggleUpdate={toggleUpdate} />}
    </ItemBlock>
  );
}
