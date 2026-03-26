import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';
import '../styles/navigation.css';

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) => isActive ? 'active' : '';

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink to="/" className={linkClass}>Dansk Negroniforening</NavLink>
        </div>

        {/* Desktop links — inside nav for flex layout */}
        <div className="navbar-links">
          <NavLink to="/" end className={linkClass}>Forside</NavLink>
          <NavLink to="/articles" className={linkClass}>Vedtægter</NavLink>
          <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
          <NavLink to="/score" className={linkClass}>Bedøm</NavLink>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile drawer — portaled to body to escape backdrop-filter containing block */}
      {createPortal(
        <>
          {open && <div className="navbar-overlay" onClick={() => setOpen(false)} />}
          <div ref={drawerRef} className={`navbar-drawer${open ? ' open' : ''}`}>
            <button className="navbar-close" onClick={() => setOpen(false)} aria-label="Close menu">
              ×
            </button>
            <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Forside</NavLink>
            <NavLink to="/articles" className={linkClass} onClick={() => setOpen(false)}>Vedtægter</NavLink>
            <NavLink to="/faq" className={linkClass} onClick={() => setOpen(false)}>FAQ</NavLink>
            <NavLink to="/score" className={linkClass} onClick={() => setOpen(false)}>Bedøm</NavLink>
          </div>
        </>,
        document.body
      )}
    </>
  );
};

export default Navigation;
