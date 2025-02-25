import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  /* ======== background Header ========= */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* ======== Toggle Menu ========= */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          ICCSAI
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i> Details
              </a>
            </li>

            {/* Committee Dropdown */}
            <li className="nav__item committee">
              <span
                className="nav__link"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Committee ▼
              </span>

              {dropdownOpen && (
                <ul className="dropdown">
                  <li>
                    <a href="#committee-members" className="dropdown__link">
                      Committee Members
                    </a>
                  </li>
                  <li>
                    <a href="#speakers" className="dropdown__link">
                      Speakers
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i> Register
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
