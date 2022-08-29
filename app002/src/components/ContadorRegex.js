function getMatches(str, regex) {
  var m = str.match(regex);
  return m === null ? 0 : m.length;
}

export const ContadorRegex = ({ titulo, texto, regex }) => (
  <h3>
    {titulo}: {getMatches(texto, regex)}
  </h3>
);
