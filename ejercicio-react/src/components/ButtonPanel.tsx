import React from 'react';

interface ButtonPanelProps {
  onButtonClick: (value: string) => void;
}

/**
 * Panel que contiene todos los botones de la calculadora.
 */
const ButtonPanel: React.FC<ButtonPanelProps> = ({ onButtonClick }) => {
  const botones = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="button-panel">
      {botones.map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonPanel;
