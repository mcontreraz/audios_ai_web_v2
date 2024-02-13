// MenuItem.js
import React from "react";
import { Wrapper } from "./styles"; // Asegúrate de que la ruta al archivo de estilos sea correcta
import Icon from "../../atoms/Icon"; // Asegúrate de que la ruta al componente Icon sea correcta
import { NavLink } from "react-router-dom";

const MenuItem = ({ icon, text, to }) => {
  return (
    <Wrapper>
      <NavLink to={to}>
        <Icon iconName={icon} className={'px-2'}/>
        {text}
      </NavLink>
    </Wrapper>
  );
};

export default MenuItem;
