import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import icons from "./icons";

const Icon = ({ iconName, className, onClick }) => {
  const icon = icons[iconName]; // Busca el ícono por su nombre
  return <FontAwesomeIcon icon={icon} className={className} onClick={onClick} />;
};

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  className: "",
  onClick: () => {},
};

export default Icon;
