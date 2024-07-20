import React from "react";

function Navbar() {
  return (
    <header className="bg-dark" style={{ backgroundColor: "#610070" }}>
      <nav
        className="navbar navbar-expand-lg navbar-dark w-100 d-flex justify-content-between fixed-top"
        style={{ backgroundColor: "#610070" }}
      >
        <div className="d-flex" style={{ marginLeft: "6rem" }}>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Noticias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Comunidad
              </a>
            </li>
          </ul>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ marginRight: "13rem" }}
        >
          <img
            className="navbar-logo"
            src="src\img/Logo1.jpeg"
            alt="Logo"
            style={{ height: "40px", width: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="d-flex" style={{ marginRight: "6.5rem" }}>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Idioma
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Español
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Inglés
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
