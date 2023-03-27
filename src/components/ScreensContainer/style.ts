import styled from "styled-components";

import { theme } from "@/themes/theme"

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid red;
  background-color: ${theme.COLORS.PAGE_BACKGROUNG};
`;
