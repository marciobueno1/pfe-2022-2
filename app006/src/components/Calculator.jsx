import React, { useState } from "react";
import { BoilingVerdict } from "./BoilingVerdict";
import { TemperatureInput } from "./TemperatureInput";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export const Calculator = () => {
  const [state, setState] = useState({ temperature: "", scale: "c" });

  const handleCelsiusChange = (temperature) => {
    setState({ scale: "c", temperature });
  };

  const handleFahrenheitChange = (temperature) => {
    setState({ scale: "f", temperature });
  };

  const scale = state.scale;
  const temperature = state.temperature;
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};
