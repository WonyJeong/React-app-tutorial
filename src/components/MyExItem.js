import React from "react";
import styled, { css } from "styled-components";
import { MdCheck, MdDelete } from "react-icons/md";
import { useExDispatch } from "../MyExContext";

const CheckCircle = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  border: 1px solid #38d9a9;
  font-size: 24px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #ced4da;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      color: #495057;
    `}
`;
const ExerciseNumber = styled.div`
  align-items: center;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-right: 20px;
  color: #212529;
  ${props =>
    !props.done &&
    css`
      color: #dee2e6;
    `}
`;

const ExercicsTier = styled.img`
  align-items: center;
  justify-content: center;
  height: 28px;
  margin-right: 10px;

  ${props =>
    !props.done &&
    css`
      opacity: 0.1;
    `};
`;

const ExerciseName = styled.div`
  align-items: center;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  color: #212529;
  ${props =>
    !props.done &&
    css`
      color: #dee2e6;
    `}
`;
const ExerciseCategory = styled.div`
  display: flex;
  margin-right: 30px;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  color: #212529;
  flex: 1;
  ${props =>
    !props.done &&
    css`
      color: #dee2e6;
    `}
`;
const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  margin-right: 12px;
`;
const MyexItemBlock = styled.div`
  padding-top: 12px;
  padding-bottom: 10px;
  display: flex;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function MyExItem({ id, num, rank, level, exname, category, done }) {
  const dispatch = useExDispatch();
  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id
    });
  };

  return (
    <MyexItemBlock>
      <CheckCircle onClick={onToggle} done={done}>
        {done && <MdCheck />}
      </CheckCircle>
      <ExerciseNumber done={done}>No.{num}</ExerciseNumber>
      {rank === "Unrated" ? (
        <ExercicsTier src={`../img/RankTier/Unrated/0.svg`} done={done} />
      ) : (
        <ExercicsTier
          src={`../img/RankTier/${rank}/${level}.svg`}
          done={done}
        />
      )}
      <ExerciseName done={done}>{exname}</ExerciseName>
      <ExerciseCategory done={done}>{category}</ExerciseCategory>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </MyexItemBlock>
  );
}

export default MyExItem;
