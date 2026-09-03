import React, { useState } from "react";
import "./../../Styles/Header.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import account from "../../assets/account.jpg";

import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">

      {/* Logo */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Vibely" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">

        <Link to="/" className="home">
          HOME
        </Link>

        <Link to="/event-organizers">
          EVENT ORGANIZERS
        </Link>

        <Link to="/service-providers">
          SERVICE PROVIDERS
        </Link>

        <Link to="/about-us">
          ABOUT US
        </Link>

      </nav>

      {/* Search */}
      <div className="search">
        <FaSearch />

        <input
          type="text"
          placeholder="Search for Events, Organizers, Services"
        />
      </div>

      {/* Account */}
      <Link to="/" className="account">
        <img src={account} alt="Account" />
      </Link>

      {/* Hamburger Button - Mobile Only */}
      <button
        type="button"
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          HOME
        </Link>

        <Link to="/event-organizers" onClick={closeMenu}>
          EVENT ORGANIZERS
        </Link>

        <Link to="/service-providers" onClick={closeMenu}>
          SERVICE PROVIDERS
        </Link>

        <Link to="/about-us" onClick={closeMenu}>
          ABOUT US
        </Link>

      </nav>

    </header>
  );
}

export default Header;