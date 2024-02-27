// Sidebar.js
import React from "react";
import { Nav } from "reactstrap";
import MenuItem from "../../molecules/MenuItem";
import { Wrapper } from "./styles";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col pb-5">
          <h3 className="text-center p-4">transcribe.cl</h3>
        </div>
      </div>
      <Nav vertical>
        <MenuItem icon="home" text="Dashboard" to="/" />
        <MenuItem icon="upload" text="Lista de Trabajos" to="/jobList" />
        <MenuItem icon="upload" text="Subir archivo" to="/uploadFile" />
        {/* Repite para los demás enlaces */}
      </Nav>
    </Wrapper>
  );
};

export default Sidebar;
