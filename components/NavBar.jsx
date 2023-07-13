import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="container-fluid mt-2">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleNavToggle}
              style={{
                border: "none",
                background: "transparent",
                padding: "0",
                transition: "transform 0.3s ease",
                transform: isNavOpen ? "rotate(45deg)" : "none"
              }}
            >
              {isNavOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>

            <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contacto
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Servicios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;



