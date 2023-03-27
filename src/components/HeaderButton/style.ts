import styled from "styled-components";

import { theme } from "@/themes/theme"

interface IPropsHeaderButton {
  row: boolean;
}

export const MenuButton = styled.button<IPropsHeaderButton>`
  width: ${({ row }) => row ? "25%" : "100%"};
  border: 0px;
  border-radius: 0px;
  height: 40px;
  background-color: ${theme.COLORS.HEADER_HOVER};
  &:hover {
    background-color: ${theme.COLORS.HEADER_BACKGROUND};
  }
`;
