import styled from "styled-components";

import { theme } from "@/themes/theme"

interface IPropsHeaderMenu {
  row: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background-color: ${theme.COLORS.HEADER_BACKGROUND};
`;

export const Title = styled.text`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-family: 'Courier New', Courier, monospace;
`;

export const Menu = styled.div<IPropsHeaderMenu>`
  width: ${({ row }) => row ? "400px" : "160px"};
  height: 48px;
  display: flex;
  flex-direction: ${({ row }) => row ? "row" : "column"};
  align-items: ${({ row }) => row ? "center" : "flex-end"};
  justify-content: space-around;
`;

export const ButtonContainer = styled.div<IPropsHeaderMenu>`
  margin-top: ${({ row }) => row ? "0px" : "192px"};
  position: relative;
  width: 100%;
`;

export const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 48px;
`;
