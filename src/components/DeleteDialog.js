import React from "react";
import styled, { keyframes, css } from "styled-components";
import { MdClose } from "react-icons/md";

const fadeIn = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`;

const slideUp = keyframes`
0%{
    opacity: 0;
    transform: translateY(15%);
}
100%{
    opacity: 1;
    transform: translateY(0%);
}
`;

const DialTemplate = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  animation: ${fadeIn} 0.45s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 1.2%;
  right: 3.5%;
  font-size: 35px;
  cursor: pointer;
`;

const DialBlock = styled.div`
  width: 25%;
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-sizing: border-box;
  position: relative;
  animation: ${slideUp} 0.6s ease;

  p {
    font-size: 1.3rem;
    font-weight: 700;
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
  }
  .btn-container > button {
    width: 80px;
    height: 35px;
    padding: 0.35rem;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.25s;
  }

  .btn-container > button:hover {
    transform: scale(1.05);
    opacity: 0.8;
    text-decoration: underline;
  }

  .btn-container > button:first-child {
    background: #000;
    color: #fff;
  }
  .btn-container > button:last-child {
    margin-left: 1rem;
  }
`;

function DeleteDialog({ setSwitchDial }) {
  const clearLocalStorage = () => {
    localStorage.clear();
    setSwitchDial(false);
    window.location.reload(true);
  };

  return (
    <DialTemplate>
      <DialBlock>
        <CloseBtn onClick={() => setSwitchDial(false)}>
          <MdClose />
        </CloseBtn>
        <p>저장된 내용을 모두 삭제하시겠습니까?</p>
        <p style={{ color: "red" }}>데이터가 모두 사라집니다.</p>
        <div className="btn-container">
          <button onClick={clearLocalStorage}>삭제</button>
          <button onClick={() => setSwitchDial(false)}>취소</button>
        </div>
      </DialBlock>
    </DialTemplate>
  );
}

export default React.memo(DeleteDialog);
