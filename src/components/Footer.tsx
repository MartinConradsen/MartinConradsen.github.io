import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Dansk Negroni Forening</p>
    </footer>
  );
};

export default Footer;