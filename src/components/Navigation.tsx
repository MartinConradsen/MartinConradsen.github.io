import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Dansk Negroniforening</Link>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Dim background */}
      {open && <div className="navbar-overlay" />}

      <div
        ref={menuRef}
        className={`navbar-links ${open ? 'open' : ''}`}
      >
        <button
          className="navbar-close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <Link to="/" onClick={() => setOpen(false)}>Forside</Link>
        <Link to="/articles" onClick={() => setOpen(false)}>Vedtægter</Link>
      </div>
    </nav>
  );
};

export default Navigation;