// components/atoms/HeaderStyles.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
  margin: 0px;
`;

export const LogoContainer = styled.div`
  // Estilos para tu contenedor del logo si es necesario
`;

export const NavContainer = styled.nav`
  // Estilos para la sección de navegación si es necesario
`;

export const UserIcon = styled.div`
  cursor: pointer;
  // Puedes añadir más estilos aquí, como margen o tamaño
`;

export const LanguageSwitcher = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const HamburgerIcon = styled.div`
  cursor: pointer;
  // Estilos para tu menú hamburguesa
`;

// Añade más componentes estilizados según sea necesario
