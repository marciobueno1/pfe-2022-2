export const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>A água ferveria.</p>;
  }
  return <p>A água não ferveria.</p>;
};
