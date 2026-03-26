import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const NotFound: React.FC = () => (
  <PageWrapper>
    <div className="notfound">
      <h1>404</h1>
      <p>Denne side findes ikke.</p>
      <Link to="/">← Tilbage til forsiden</Link>
    </div>
  </PageWrapper>
);

export default NotFound;
