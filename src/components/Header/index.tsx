import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => (
  <header className="header">
    <span>Logo</span>
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profiles/new">Nowe home</NavLink>
    </nav>
  </header>
);
