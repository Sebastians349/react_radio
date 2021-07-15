import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";

const HeaderMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} variant="outline">
        Menú
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link href="#">Listado de radios</Link>
        </MenuItem>
        <MenuItem>Comentarios</MenuItem>
        <MenuItem>Contacto</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HeaderMenu;
