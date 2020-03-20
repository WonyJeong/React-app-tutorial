import React from "react";
import styled, { css } from "styled-components";

const CustomButton = styled.button`
  margin: 10px;
  outline: none;
  border: none;
  color: white;
  display: inline-flex;
  border-radius: 4px;
  height: 2.25rem;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  background: #63e6be;
  font-weight: bold;

  &:hover {
    background: #96f2d7;
  }
  &:active {
    background: #38d9a9;
  }

  ${props =>
    props.color === "red" &&
    css`
      background: #ff8787;
      &:hover {
        background: #ffa8a8;
      }
      &:active {
        background: #ff6b6b;
      }
    `}

  & + & {
    margin-left: 10px;
  }
`;

function Button({ children, onError, ...rest }) {
  return (
    <CustomButton onError={onError} {...rest}>
      {children}
    </CustomButton>
  );
}

export default Button;
