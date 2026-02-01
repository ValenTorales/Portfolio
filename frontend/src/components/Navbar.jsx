import { NavLink } from "react-router-dom";
// import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__brand">Valentin Torales</div>
      <nav className="nav__links">
        <NavLink to="/" end className="nav__link">Inicio</NavLink>
        <NavLink to="/portafolio" className="nav__link">Portafolio</NavLink>
      </nav>
    </header>
  );
}
