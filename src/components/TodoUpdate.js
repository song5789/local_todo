import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { MdCreate, MdClose } from "react-icons/md";
import { useTodoDispatch } from "../context/TodoContext";

const UpdateBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 12px;
  z-index: 8;
  margin-bottom: 0.5rem;

  position: absolute;
  top: -2%;
  left: 0;
  width: 100%;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 1.7rem;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;
const Update = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 1.7rem;
  cursor: pointer;
  &:hover {
    color: #829efa;
  }
`;

const UpdateInput = styled.input`
  width: 70%;
  padding: 0.8rem;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  font-size: 1rem;
`;

export default function TodoUpdate({ id, text, toggleUpdate }) {
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();

  useEffect(() => {
    setValue(text);
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onUpdate = (id, value) => {
    dispatch({
      type: "UPDATE",
      id,
      update: {
        text: value,
      },
    });
    setValue("");
    toggleUpdate();
  };
  return (
    <UpdateBlock>
      <Close onClick={toggleUpdate}>
        <MdClose />
      </Close>
      <UpdateInput value={value} onChange={onChange} />
      <Update onClick={() => onUpdate(id, value)}>
        <MdCreate />
      </Update>
    </UpdateBlock>
  );
}
