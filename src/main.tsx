import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App';
import Articles from './components/Articles';
import FAQ from './components/FAQ';
import ScoreCalculator from './components/ScoreCalculator';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import './styles/global.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<App />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/score" element={<ScoreCalculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
