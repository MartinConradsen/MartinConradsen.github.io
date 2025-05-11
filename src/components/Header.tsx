import React from 'react';

interface HeaderProps {
  title: string;
  tagline: string;
}

const Header: React.FC<HeaderProps> = ({ title, tagline }) => {
    return (
      <header>
        <h1>{title}</h1>
        <p>{tagline}</p>
      </header>
    );
  };

export default Header;