import { useBearStore } from "../zustand";

export function TestMode() {
  const mode = useBearStore((state) => state.mode);
  const bears = useBearStore((state) => state.bears);
  return (
    <div>
      <hr />
      <h3>mode = {mode}</h3>
      <h3>bears = {bears}</h3>
      <hr />
    </div>
  );
}
