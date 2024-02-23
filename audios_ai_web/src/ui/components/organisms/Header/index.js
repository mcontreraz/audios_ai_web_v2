// components/organisms/Header.js
import React, { useState } from "react";
import {
  HeaderContainer,
  UserIcon,
  LanguageSwitcher,
  HamburgerIcon,
} from "./styles";
import Icon from "../../atoms/Icon";

const Header = () => {

  return (
    <HeaderContainer>
      <LanguageSwitcher>
        <Icon iconName="flag" />
        {/* TODO: Sustituir "flag" por icono de bandera */}
      </LanguageSwitcher>
      <UserIcon>
        <Icon iconName="user" />
      </UserIcon>
    </HeaderContainer>
  );
};

export default Header;
