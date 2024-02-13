// Sidebar.js
import React from "react";
import { Nav } from "reactstrap";
import MenuItem from "../../molecules/MenuItem";
import { Wrapper } from "./styles";

const Sidebar = () => {
  return (
    <Wrapper>
      <Nav vertical>
        <MenuItem icon="home" text="Dashboard" to="/" />
        <MenuItem icon="upload" text="Lista de Trabajos" to="/files" />
        <MenuItem icon="upload" text="Subir archivo" to="/upload" />
        {/* Repite para los demás enlaces */}
      </Nav>
    </Wrapper>
  );
};

export default Sidebar;
