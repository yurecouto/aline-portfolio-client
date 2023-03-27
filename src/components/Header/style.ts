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
  box-shadow: 0 4px 8px -1px gray;
`;

export const Title = styled.text`
  min-width: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 400;
  margin-left: 16px;
  font-family: 'Montserrat', sans-serif;
`;

export const Menu = styled.div<IPropsHeaderMenu>`
  width: ${({ row }) => row ? "400px" : "144px"};
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
  margin-right: 16px;
`;

export const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 48px;
`;
