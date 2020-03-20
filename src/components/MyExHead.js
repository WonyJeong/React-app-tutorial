import React from "react";
import styled from "styled-components";
import { useExState } from "../MyExContext";

const MyExHeadBlock = styled.div`
  padding: 24px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  h1 .day {
    font-size: 18px;
  }
  .solve-tasks {
    margin-top: 5px;
    font-size: 18px;
  }
`;

function MyExHead() {
  const todos = useExState();
  const value = todos.filter(todo => todo.done).length;
  return (
    <MyExHeadBlock>
      <h1>
        2020-03-04 <span className="day">수요일</span>
      </h1>
      <div className="solve-tasks">오늘 푼 문제 수 : {value}</div>
    </MyExHeadBlock>
  );
}

export default MyExHead;
