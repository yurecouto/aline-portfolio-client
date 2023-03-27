import styled from "styled-components";

import { theme } from "@/themes/theme"

export const MenuButton = styled.button`
  width: 25%;
  border: 0px;
  border-radius: 0px;
  height: 40px;
  content: ${({ name }) => name};

  background-color: ${theme.COLORS.HEADER_BACKGROUND};
  &:hover {
    background-color: ${theme.COLORS.HEADER_HOVER};
  }
`;
