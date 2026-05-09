import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <a
        className="footer-instagram"
        href="https://www.instagram.com/dansk_negroni_forening/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Følg os på Instagram"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </svg>
      </a>
      <p>© {new Date().getFullYear()} Dansk Negroni Forening</p>
    </footer>
  );
};

export default Footer;
