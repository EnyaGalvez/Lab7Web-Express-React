import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

function App() {
  const [input, setInput] = useState<string>('');

  const manejarClickBoton = (valor: string) => {
    if (valor === '=') {
      try {
        const resultado = eval(input);
        setInput(String(resultado));
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + valor);
    }
  };

  return (
    <div className="calculator">
      <h1>Calculadora React</h1>
      <Display value={input} />
      <ButtonPanel onButtonClick={manejarClickBoton} />
    </div>
  );
}

export default App;
