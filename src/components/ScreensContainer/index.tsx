"use client";

import { ReactNode } from "react";
import { Container } from "./style";

interface Props {
  children?: ReactNode;
}

export default function ScreensContainer({
  children,
  }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}
