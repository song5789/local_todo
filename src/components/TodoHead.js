import styled from "styled-components";
import dayColor from "../lib/dayColor";
import { useTodoState } from "../context/TodoContext";
import getLeftTask from "../lib/getLeftTask";

const HeadBlock = styled.div`
  width: 100%;
  padding: 35px 24px 24px 24px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  h1 {
    margin: 0;
    font-size: 2.3rem;
  }
  .dayStr {
    font-size: 1.8rem;
    margin: 1rem 0;
    color: ${(props) => props.color || "#a8a8a8"};
  }
  .leftTask {
    color: #2dc716;
    margin: 0;
  }
`;

const TodoHead = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const list = useTodoState();
  const leftTask = getLeftTask(list);

  const day = today.toLocaleDateString("ko-KR", { weekday: "long" });
  const color = dayColor(day);
  return (
    <HeadBlock color={color}>
      <h1>{dateString}</h1>
      <h1 className="dayStr">{day}</h1>
      <h2 className="leftTask">할 일 {leftTask}개 남음</h2>
    </HeadBlock>
  );
};

export default TodoHead;
