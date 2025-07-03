import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Dansk Negroniforening</p>
    </footer>
  );
};

export default Footer;