import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <h1>Página Root</h1>
      <Outlet />
      <NavLink to="/page1">Página 1</NavLink>
      {" | "}
      <NavLink to="/page2">Página 2</NavLink>
      {" | "}
      <NavLink to="/page3">Página 3</NavLink>
      <h3>Rodapé</h3>
    </div>
  );
};
