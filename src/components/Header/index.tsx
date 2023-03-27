"use client";

import HeaderButton from "../HeaderButton";
import { Container, Title, Menu } from "./style";

export default function Header() {


  return (
    <Container>
      <Title>Aline Ferreira</Title>

      <Menu>
        <HeaderButton
          title={"Home"}
          section={"section-home"}
        />

        <HeaderButton
          title={"About"}
          section={"section-about"}
        />

        <HeaderButton
          title={"Gallery"}
          section={"section-gallery"}
        />

        <HeaderButton
          title={"Contact"}
          section={"section-contact"}
        />
      </Menu>
    </Container>
  )
}
