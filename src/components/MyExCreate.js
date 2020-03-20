import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useExDispatch, useExNextId } from "../MyExContext";
import Button from "./Button";
import Dialog from "./Dialog";

const SelectOption = styled.option`
  outline: none;
  border: none;
  border-radius: 4px;
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const CircleButton = styled.div`
  z-index: 5;
  width: 80px;
  height: 80px;
  background: #63e6be;
  margin: 0 auto;
  font-size: 60px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  outline: none;
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  transition: 0.125s ease-in;

  &:hover {
    width: 85px;
    height: 85px;
    background: #96f2d7;
  }

  &:active {
    background: #38d9a9;
  }

  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        width: 85px;
        height: 85px;
        background: #ff8787;
      }

      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositionUp = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  p {
    font-size: 12px;
    color: #495057;
  }
  background: #f8f9fa;
  padding: 32px;
  padding-top: 14px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
  justify-content: center;
`;

const InputExNum = styled.input`
  width: 98px;
  height: 25px;
  margin-right: 14px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  box-sizing: border-box;
  margin-bottom: 15px;
  ::-webkit-input-placeholder {
    text-align: center;
  }
`;
const InputRankTier = styled.select`
  margin-right: 12px;
  border-radius: 4px;
  width: 105px;
  height: 26px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
`;

const InputRankTierLevel = styled.select`
  margin-right: 12px;
  border-radius: 4px;
  width: 84px;
  height: 26px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  margin-bottom: 15px;
`;
const InputExName = styled.input`
  width: 218px;
  height: 25px;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  box-sizing: border-box;
  ::-webkit-input-placeholder {
    text-align: center;
  }
`;
const InputExCategory = styled.select`
  margin-right: 12px;
  border-radius: 4px;
  width: 112px;
  height: 24px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
`;

const SubmutButton = styled.button`
  width: 56px;
  height: 24px;
  outline: none;
  border: 1px solid #dee2e6;
  background: white;
  border-radius: 4px;
  color: #343a40;
  cursor: pointer;
  &:hover {
    border: 1px solid #adb5bd;
  }
  &:active {
    border: 1px solid #495057;
  }
`;

function MyExCreate() {
  const ranks = [
    "Unrated",
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Ruby"
  ];
  const levels = ["5", "4", "3", "2", "1"];
  const categorys = ["DP", "Tree", "Search", "DB", "DFS", "BFS"];
  const dispatch = useExDispatch();
  const nextId = useExNextId();
  const [dialog, setDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    num: "",
    rank: "",
    level: "",
    exname: "",
    category: "",
    done: false
  });

  const { num, rank, level, exname, category } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    const next = {
      ...inputs,
      [name]: value
    };
    setInputs(next);
  };

  const onClick = () => {
    setOpen(!open);
    onReset();
    setInputs({
      num: "",
      rank: ranks[0],
      level: levels[0],
      exname: "",
      category: categorys[0],
      done: false
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { num, exname } = inputs;
    if (num === "" || exname === "") {
      setDialog(true);
    } else {
      dispatch({
        type: "CREATE",
        example: {
          id: nextId.current,
          num: inputs.num,
          rank: inputs.rank,
          level: inputs.level,
          exname: inputs.exname,
          category: inputs.category,
          done: false
        }
      });
      setOpen(!open);
      nextId.current++;
      console.log(inputs);
      onReset();
    }
  };

  const onReset = () => {
    setInputs({
      num: "",
      rank: "Unrated",
      level: "",
      exname: "",
      category: "",
      done: false
    });
  };
  const onConfirm = () => {
    setDialog(false);
  };

  return (
    <>
      {open && (
        <InsertFormPositionUp>
          <InsertForm>
            <p>내용을 입력한 후 추가 버튼을 클릭하세요</p>
            <InputExNum
              placeholder="문제번호"
              autoFocus
              name="num"
              onChange={onChange}
              value={num}
            />
            <InputRankTier onChange={onChange} name="rank" value={rank}>
              {ranks.map((val, key) => (
                <SelectOption key={key} value={val}>
                  {val}
                </SelectOption>
              ))}
              />
            </InputRankTier>

            {rank !== "Unrated" && (
              <InputRankTierLevel
                onChange={onChange}
                name="level"
                value={level}
              >
                {rank === "Unrated" ? (
                  <option value="Unrated">Level</option>
                ) : null}
                {levels.map((val, key) => (
                  <SelectOption key={key} value={val}>
                    {val}
                  </SelectOption>
                ))}
              </InputRankTierLevel>
            )}

            <InputExName
              placeholder="문제이름"
              name="exname"
              value={exname}
              onChange={onChange}
            ></InputExName>
            <InputExCategory
              onChange={onChange}
              name="category"
              value={category}
            >
              {categorys.map((val, key) => (
                <SelectOption key={key} value={val}>
                  {val}
                </SelectOption>
              ))}
            </InputExCategory>
            <SubmutButton onClick={onSubmit}>추가</SubmutButton>
          </InsertForm>
        </InsertFormPositionUp>
      )}
      <CircleButton onClick={onClick} open={open}>
        <MdAdd />
      </CircleButton>
      <Dialog visible={dialog} onConfirm={onConfirm}></Dialog>
    </>
  );
}

export default MyExCreate;
