"use client";

import { useWindowSize } from "@/hooks/window";
import { Icon } from "@iconify/react";
import { useLayoutEffect, useState } from "react";
import HeaderButton from "../HeaderButton";
import { Container, Title, Menu, ButtonContainer, CloseContainer } from "./style";

export default function Header() {
  const { width } = useWindowSize();

  const [isRow, setIsRow] = useState<boolean>(width > 960);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (width > 960) {
        setIsRow(true);
        setIsOpen(false);
      } else {
        setIsRow(false);
      };
    };

    return () => {
      isMounted = false;
    };
  }, [width]);

  return (
    <Container>
      <Title>Aline Ferreira</Title>

      <Menu row={isRow}>
        {(!isRow && !isOpen)&& (
            <Icon
              icon={"mingcute:menu-fill"}
              onClick={handleOpen}
              style={{height: "24px", width: "24px", marginRight: "16px"}}
            />
        )}

        {(isRow || isOpen )&& (
          <ButtonContainer row={isRow}>
            {isOpen && (
              <CloseContainer>
                <Icon
                  icon={"ph:x-bold"}
                  onClick={handleOpen}
                  style={{height: "24px", width: "24px"}}
                />
              </CloseContainer>
            )}

            <HeaderButton
              title={"Home"}
              section={"section-home"}
              row={isRow}
            />

            <HeaderButton
              title={"About"}
              section={"section-about"}
              row={isRow}
            />

            <HeaderButton
              title={"Gallery"}
              section={"section-gallery"}
              row={isRow}
            />

            <HeaderButton
              title={"Contact"}
              section={"section-contact"}
              row={isRow}
            />
          </ButtonContainer>
        )}

      </Menu>
    </Container>
  )
}
