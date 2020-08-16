import React, { Component } from "react";
import logo from "../images/react-icon.png";
import { NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/* Logo */}
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <div id="brand">Daniel Tendero.</div>
          </div>
          <nav id="menu">
            <ul>
              <li>
                <NavLink activeClassName="active" to="/home">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/ruta-prueba">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/segunda-ruta">
                  Formulario
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/pagina-1">
                  Página 1
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="pruebas/Daniel">
                  Página 2
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}
export default Header;
