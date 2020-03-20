import React from "react";
import styled from "styled-components";
import Button from "./Button";

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
`;

const ModifyBlock = styled.div`
  width: 368px;
  height: 185px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  padding: 15px;
  h3 {
    margin-top: 20px;
    font-size: 28px;
  }
  p {
    font-size: 18px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

function Dialog({ visible, onConfirm }) {
  if (!visible) return null;
  return (
    <DarkBackground>
      <ModifyBlock>
        <h3>Solved List</h3>
        <p>입력하지 않은 항목이 존재합니다.</p>
        <ButtonGroup>
          <Button onClick={onConfirm}>확인</Button>
        </ButtonGroup>
      </ModifyBlock>
    </DarkBackground>
  );
}

export default Dialog;
