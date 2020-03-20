import React from "react";
import styled from "styled-components";
import MyExItem from "./MyExItem";
import { useExState } from "../MyExContext";

const MyExerciseListBlock = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  padding-left: 20px;
  flex-direction: column;
  /*Scrollbar design */
  ::-webkit-scrollbar {
    width: 16px;
  }
  ::-webkit-scrollbar-track {
    background: #e9ecef;
  }
  ::-webkit-scrollbar-thumb {
    background: #c3fae8;
    border-radius: 8px;
  }
`;
function MyExList() {
  const examples = useExState();
  return (
    <MyExerciseListBlock>
      {examples.map(example => (
        <MyExItem
          key={example.id}
          id={example.id}
          num={example.num}
          rank={example.rank}
          level={example.level}
          exname={example.exname}
          category={example.category}
          done={example.done}
        ></MyExItem>
      ))}
    </MyExerciseListBlock>
  );
}

export default MyExList;
