import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Dansk Negroni Forening</Link>
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      <div className={`navbar-links ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Forside</Link>
        <Link to="/articles" onClick={() => setOpen(false)}>Vedtægter</Link>
      </div>
    </nav>
  );
};

export default Navigation;