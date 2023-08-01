import styled, { css, keyframes } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { useTodoDispatch } from "../context/TodoContext";
const CretateBackground = styled.div`
  width: 100%;
  height: 150px;
  padding: 1rem;
  background: #f0eded;
  box-sizing: border-box;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  position: relative;
`;

const Button = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  background: #58db53;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  transition: 0.15s;
  cursor: pointer;

  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    opacity: 0.95;
  }
  &:active {
    background: #20c997;
  }

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 135%) rotate(45deg);
    `}
`;

const SlideUp = keyframes`
 0%{
    opacity: 0;
    transform: translateY(15%);
}
100%{
    opacity: 1;
    transform: translateY(0);
}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0%;
  left: 0;
  position: absolute;
  transiton: 0.125s;

  animation: ${SlideUp} 0.25s ease-in-out forwards;
`;
const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export default function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: new Date().getTime(),
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
  };

  const onToggle = () => {
    setOpen(!open);
  };
  return (
    <CretateBackground>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요." onChange={onChange} value={value} />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <Button onClick={onToggle} open={open}>
        <MdAdd />
      </Button>
    </CretateBackground>
  );
}
