import React from "react";
import styled from "styled-components";

const MyExTempleateStyle = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;

  border: 1px solid #ced4da;
  border-radius: 4px;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
`;

function MyExTempleate({ children }) {
  return <MyExTempleateStyle>{children}</MyExTempleateStyle>;
}

export default MyExTempleate;
