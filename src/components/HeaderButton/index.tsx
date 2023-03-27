"use client";

import { MenuButton } from "./style";

interface Props {
  section: string;
  title: string;
}

export default function HeaderButton({title, section}: Props) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MenuButton
      onClick={() => handleScroll(section)}
    >
      {title}
    </MenuButton>
  )
}
