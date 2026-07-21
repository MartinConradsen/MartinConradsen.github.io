import React from 'react';
import { Link } from 'react-router-dom';
import negroniImage from '../assets/general_negroni.jpg';
import logo from '../assets/dnf_logo_transparent.png';
import FadeIn from './FadeIn';
import '../styles/about.css';

const featureLinks = [
  {
    number: '01',
    title: 'Find',
    description: 'Gå på opdagelse i medlemmernes bedømmelser fra barer nær og fjern.',
    href: 'https://www.google.com/maps/d/edit?mid=1lREHM2b36HqE5KwI3IFwFNHhMRnEg7E&usp=sharing',
    label: 'Åbn Negronikortet',
  },
  {
    number: '02',
    title: 'Bedøm',
    description: 'Giv din negroni en officiel DNF-score på smag, is, glas, farve og pynt.',
    to: '/score',
    label: 'Start bedømmelsen',
  },
  {
    number: '03',
    title: 'Bland',
    description: 'Se foreningens udvalgte gin, vermouth og bitter til den rette blanding.',
    to: '/recommendations',
    label: 'Se ingredienserne',
  },
];

const About: React.FC = () => (
  <>
    <section className="home-hero">
      <div className="home-hero-copy">
        <span className="home-kicker">Dansk Negroni Forening · Må Generalen være med dig</span>
        <h1>
          Bitter.<br />
          Balanceret.<br />
          <em>Ufravigelig.</em>
        </h1>
        <p className="home-hero-lead">
          Vi dokumenterer, bedømmer og forsvarer verdens bedste cocktail.
          Én negroni ad gangen.
        </p>
        <div className="home-actions">
          <Link className="home-button home-button-primary" to="/score">
            Bedøm en Negroni
          </Link>
          <a
            className="home-button home-button-secondary"
            href="https://www.google.com/maps/d/edit?mid=1lREHM2b36HqE5KwI3IFwFNHhMRnEg7E&usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Udforsk kortet
          </a>
          <a
            className="home-button home-button-secondary home-button-instagram"
            href="https://www.instagram.com/dansk_negroni_forening/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Følg os på Instagram
          </a>
        </div>
      </div>

      <div className="home-hero-art" aria-hidden="true">
        <img className="hero-logo" src={logo} alt="" />
      </div>
    </section>

    <FadeIn>
      <section className="home-intro">
        <span className="home-section-label">Foreningens formål</span>
        <p>
          En hyldest til den klassiske Negroni og til dem, der ved, at enkelhed
          kræver kompromisløshed.
        </p>
      </section>
    </FadeIn>

    <section className="home-features" aria-label="Udforsk foreningen">
      {featureLinks.map((feature, index) => {
        const content = (
          <>
            <span className="feature-number">{feature.number}</span>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
            <span className="feature-cta">{feature.label} <span aria-hidden="true">↗</span></span>
          </>
        );

        return (
          <FadeIn key={feature.number} delay={index * 0.06} className="feature-fade">
            {feature.to ? (
              <Link className="home-feature" to={feature.to}>{content}</Link>
            ) : (
              <a className="home-feature" href={feature.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            )}
          </FadeIn>
        );
      })}
    </section>

    <FadeIn>
      <section className="home-manifesto">
        <span className="home-section-label">Et lille manifest</span>
        <div className="manifesto-lines">
          <p>Vi tror på lige dele.</p>
          <p>Vi tror på klar is.</p>
          <p>Vi tror på appelsin.</p>
          <p className="manifesto-accent">Og vi accepterer ikke frugtsalat.</p>
        </div>
      </section>
    </FadeIn>

    <FadeIn>
      <section className="home-history">
        <div className="history-image-wrap">
          <img src={negroniImage} alt="Pascal-Olivier de Negroni i uniform" />
          <span className="history-caption">Pascal-Olivier de Negroni · Generalen</span>
        </div>
        <div className="history-copy">
          <span className="home-section-label">Legenden fra Firenze</span>
          <h2>En Americano var blevet for tam.</h2>
          <p>
            I 1919 på Caffè Casoni bad Pascal-Olivier de Negroni bartenderen om at give
            hans sædvanlige aperitif mere karakter. Danskvand blev erstattet af
            gin, citronen af appelsin, og en klassiker blev født.
          </p>
          <p>
            En perfekt balance mellem bitterhed, sødme og styrke. Resten er,
            som man siger, historie.
          </p>
        </div>
      </section>
    </FadeIn>

    <FadeIn>
      <section className="home-map">
        <div className="map-grid" aria-hidden="true">
          <span className="map-pin pin-one" />
          <span className="map-pin pin-two" />
          <span className="map-pin pin-three" />
          <span className="map-route route-one" />
          <span className="map-route route-two" />
        </div>
        <div className="map-copy">
          <span className="home-section-label">Negronikortet</span>
          <h2>Hvor drikker man en god Negroni?</h2>
          <p>
            Fra København til Tokyo. Find medlemmernes bedømmelser, og se hvor
            verdens bedste cocktail bliver behandlet med den rette respekt.
          </p>
          <a
            className="home-button home-button-primary"
            href="https://www.google.com/maps/d/edit?mid=1lREHM2b36HqE5KwI3IFwFNHhMRnEg7E&usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Åbn Negronikortet
          </a>
        </div>
      </section>
    </FadeIn>
  </>
);

export default About;
