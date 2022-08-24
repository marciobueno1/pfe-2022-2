import React from "react";

export const Contador = ({ txt }) => {
  let [contador, setContador] = React.useState(0);
  const handleClickMais = () => {
    setContador((contadorAtual) => contadorAtual + 1);
  };
  const handleClickMenos = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  return (
    <div>
      <h3>
        {txt} - {contador}
      </h3>
      <button onClick={handleClickMenos} disabled={contador <= 0}>
        -
      </button>
      <button onClick={handleClickMais}>+</button>
    </div>
  );
};
