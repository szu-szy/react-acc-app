import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => (
  <header className="header">
    <span>Logo</span>
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/home">Nowe home</NavLink>
      <NavLink to="/list">Lista profili</NavLink>
      <NavLink to="/form">Form</NavLink>
    </nav>
  </header>
);
