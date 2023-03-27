import { MenuButton } from "./style";

interface Props {
  section: string;
  title: string;
  row: boolean;
}

export default function HeaderButton({title, section, row}: Props) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MenuButton
      onClick={() => handleScroll(section)}
      row={row}
    >
      {title}
    </MenuButton>
  )
}
