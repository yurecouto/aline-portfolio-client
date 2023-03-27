import styled from "styled-components";

import { theme } from "@/themes/theme"

interface IPropsHeaderMenu {
  row: boolean;
}

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
  font-size: 22px;
`;

export const Menu = styled.div<IPropsHeaderMenu>`
  width: ${({ row }) => row ? "400px" : "200px"};
  height: 40px;
  display: flex;
  flex-direction: ${({ row }) => row ? "row" : "column"};
  align-items: ${({ row }) => row ? "center" : "flex-end"};
  justify-content: space-around;
  border: 1px solid red;
`;

export const ButtonContainer = styled.div<IPropsHeaderMenu>`
  margin-top: ${({ row }) => row ? "0px" : "160px"};
  position: relative;
  width: 100%;
`;

export const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid red;
  height: 40px;
`;
