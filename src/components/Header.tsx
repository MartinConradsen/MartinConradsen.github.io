import React from 'react';
import logo from '../assets/dnf_logo_transparent.png';

interface HeaderProps {
  title: string;
  tagline: string;
}

const Header: React.FC<HeaderProps> = ({ title, tagline }) => {
    return (
      <header>
        <img src={logo} alt="Dansk Negroni Forening" className="header-logo" />
        <h1>{title}</h1>
        <p>{tagline}</p>
      </header>
    );
  };

export default Header;