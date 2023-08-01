import styled, { css, keyframes } from "styled-components";
import { useState } from "react";
import { useTodoDispatch, useTodoLocalState, useTodoState } from "../context/TodoContext";

const HeartBeat = keyframes`
0%,100%{
    transform: scale(1);
}
50%{
    transform: scale(1.05);
}
`;

const MainBtn = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: fixed;
  background: #000;
  color: #fff;
  top: 85%;
  left: 85%;
  cursor: pointer;
  transition: 0.8s;
  font-weight: 700;
  font-size: 1.3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 0 12px #fff;
  }
  animation: ${HeartBeat} 0.8s ease-out infinite;

  .btns {
    display: flex;
    flex-direction: column;
  }
`;

const SlideUp = keyframes`
0%{
    opacity:0;
    transform: translateY(30%);
}
100%{
    opacity:1;
    transform: translateY(0%);
}

`;

const Btns = styled.div`
  width: 70px;
  height: 70px;
  background: #fff;
  border-radius: 50%;
  color: #000;
  position: absolute;
  top: ${(props) => props.top || "0%"};
  left: 15%;
  font-size: 1rem;
  transiton: 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${SlideUp} 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 0 12px #fff;
  }
`;

export default function ButtonContainer() {
  const [open, setOpen] = useState(false);
  const state = useTodoState();

  const onToggle = () => {
    setOpen(!open);
  };

  const saveOnLocal = () => {
    localStorage.setItem("todoList", JSON.stringify(state, null, 2));
  };
  const deleteLocalData = () => {
    localStorage.clear();
  };
  return (
    <MainBtn onClick={onToggle}>
      Click!
      {open && (
        <div className="btns">
          <Btns top={"-80%"} onClick={saveOnLocal}>
            저장
          </Btns>
          <Btns top={"-160%"} onClick={deleteLocalData}>
            삭제
          </Btns>
        </div>
      )}
    </MainBtn>
  );
}
