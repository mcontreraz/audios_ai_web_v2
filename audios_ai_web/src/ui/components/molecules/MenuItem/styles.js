// styles.js
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.li`
  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0.2rem 1rem;

    &:hover,
    &.active {
      background-color: #495057; // Color de fondo para el ítem activo o en hover
    }
  }

  .icon {
    margin-right: 0.5rem; // Asegúrate de que los íconos y el texto tengan algo de espacio entre ellos
  }
`;

// Además, si quieres estilizar directamente el NavLink con styled-components, puedes hacerlo así:
export const StyledNavLink = styled(NavLink);
