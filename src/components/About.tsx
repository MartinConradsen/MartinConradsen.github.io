import React from "react";
import '../styles/about.css';
import negroniImage from "../assets/general_negroni.jpg";

const About: React.FC = () => {
  return (
    <>
      <section className="about">
        <h2>"Kender du historien bag Negroni?"</h2>
        <p>
          Dette er sandsynligvis det første spørgsmål, du vil få stillet af et
          medlem af Dansk Negroniforening. Det er nemlig ikke bare en cocktail;
          det er en fortælling, en tradition og en test af din værdighed.
        </p>
        <p>
          Ifølge den mest udbredte historie blev negronien opfundet i 1919 på
          Caffè Casoni i Firenze. Pascal-Olivier de Negroni (kendt hos foreningen som "Generalen")
          syntes, at hans sædvanlige Americano var blevet for tam. Han bad
          derfor bartenderen, Forsco Scarselli, om at gøre den stærkere.
        </p>
        <p>
          Scarselli byttede danskvandet ud med gin og tilføjede en appelsinskive
          i stedet for den sædvanlige citron. Resultatet var ikonisk: En perfekt
          balance mellem bitterhed, sødme og styrke. Snart begyndte folk at
          strømme til baren og bede om “en negroni, tak”.
        </p>
        <p>Og resten, som man siger, er historie.</p>

        <figure className="negroni-figure">
          <img src={negroniImage} alt="General Negroni" />
          <figcaption>Pascal-Olivier de Negroni.</figcaption>
        </figure>
      </section>
      <section className="negroni-map">
        <h2 className="negroni-map-header">Negronikortet</h2>
        <p>
          Udforsk vores interaktive Negronikort med bedømmelser fra medlemmer
          over hele verden. Fra København til Tokyo: se hvor du kan finde de
          bedste versioner af verdens bedste cocktail.
        </p>
        <a href="https://www.google.com/maps/d/edit?mid=1lREHM2b36HqE5KwI3IFwFNHhMRnEg7E&usp=sharing" target="_blank" className="map-link">
          <div className="map-preview">
            <span className="map-caption">Klik for at åbne kortet</span>
          </div>
        </a>
      </section>
    </>
  );
};

export default About;
