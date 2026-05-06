import React from 'react';

interface DisplayProps {
  value: string;
}

/**
 * Componente que muestra el valor actual de la calculadora.
 */
const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="display">
      {value}
    </div>
  );
};

export default Display;
