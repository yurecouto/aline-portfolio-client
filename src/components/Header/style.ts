import styled from "styled-components";

import { theme } from "@/themes/theme"

export const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  border: 1px solid red;
`;

export const Title = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  font-size: 24px;
`;

export const Menu = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid red;
`;
