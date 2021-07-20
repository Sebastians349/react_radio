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
          <Link>Listado de radios</Link>
        </MenuItem>

        <MenuItem>
          <Link href="#">Comentarios</Link>
        </MenuItem>

        <MenuItem>
          <Link href="#">Contacto</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HeaderMenu;
