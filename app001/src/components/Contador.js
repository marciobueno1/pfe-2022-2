let contador = 0;
export const Contador = ({ txt }) => {
  const handleClickMais = () => {
    contador += 1;
    console.log(contador);
  };
  const handleClickMenos = () => {
    contador -= 1;
    console.log(contador);
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
