import styled, { css, keyframes } from "styled-components";
import { useState } from "react";
import { useTodoState } from "../context/TodoContext";
import { MdSave, MdDelete } from "react-icons/md";

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
  top: 80%;
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
  animation: ${HeartBeat} 2s ease-out infinite;

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
  color: ${(props) => props.color || "#000"};
  position: absolute;
  top: ${(props) => props.top || "0%"};
  left: 15%;
  font-size: 1.8rem;
  transiton: 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${SlideUp} 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 0 12px #fff;
  }
`;

export default function ButtonContainer({ setIsSave, setSwitchDial }) {
  const [open, setOpen] = useState(false);
  const state = useTodoState();

  const onToggle = () => {
    setOpen(!open);
  };

  const saveOnLocal = () => {
    localStorage.setItem("todoList", JSON.stringify(state, null, 2));
    setIsSave(true);

    setTimeout(() => {
      setIsSave(false);
    }, 1000);
  };

  const dialControl = () => {
    setSwitchDial(true);
  };
  return (
    <>
      <MainBtn onClick={onToggle}>
        Menu
        {open && (
          <div className="btns">
            <Btns top={"-80%"} onClick={saveOnLocal}>
              <MdSave />
            </Btns>
            <Btns top={"-160%"} onClick={dialControl} color="#fa2f47">
              <MdDelete />
            </Btns>
          </div>
        )}
      </MainBtn>
    </>
  );
}
