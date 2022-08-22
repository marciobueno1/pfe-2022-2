import React from "react";

export const Contador = ({ txt }) => {
  let [contador, setContador] = React.useState(0);
  const handleClickMais = () => {
    setContador((contadorAtual) => contadorAtual + 1);
  };
  const handleClickMenos = () => {
    setContador(contador - 1);
  };
  return (
    <div>
      <h1>
        {txt} - {contador}
      </h1>
      <button onClick={handleClickMais}>+</button>
      <button onClick={handleClickMenos}>-</button>
    </div>
  );
};
