import React from 'react';
import PropTypes from 'prop-types'; // Importamos PropTypes

// Definición del componente Molecule, recibe props como parámetro
const CardComponent = ({ className, children, style }) => {
  // Combina la clase "card overflow-auto" con cualquier clase adicional proporcionada
  const classes = `card overflow-auto ${className}`;

  return (
    <div className={classes} style={{ ...style }}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

// Definición de PropTypes para el componente
CardComponent.propTypes = {
  className: PropTypes.string, // className es un string
  children: PropTypes.node, // children puede ser cualquier elemento renderizable
  style: PropTypes.object, // style debe ser un objeto
};

// Valores predeterminados para las props
CardComponent.defaultProps = {
  className: '', // Clase vacía como valor predeterminado
  style: {}, // Objeto de estilo vacío como valor predeterminado
};

export default CardComponent;
