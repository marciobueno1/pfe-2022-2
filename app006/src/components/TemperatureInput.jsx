const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export const TemperatureInput = ({
  scale,
  temperature,
  onTemperatureChange,
}) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Informe a temperatura em {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};
