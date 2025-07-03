import React from "react";
import Navigation from "./Navigation";
import "../styles/faq.css";

const FAQ: React.FC = () => {
  return (
    <>
      <Navigation />
      <section className="faq">
        <h1>Ofte stillede spørgsmål</h1>

        <div className="faq-item">
          <h3>Hvordan bliver man medlem af Dansk Negroniforening?</h3>
          <p>
            Du skal inviteres af et eksisterende medlem og derefter godkendes på
            generalforsamlingen. Du skal elske negroni, kunne fortælle dens
            historie, og som noget helt særligt: servere den perfekte negroni
            for alle medlemmer ved generalforsamlingen.
          </p>
        </div>

        <div className="faq-item">
          <h3>Hvornår og hvordan afholdes generalforsamlingen?</h3>
          <p>
            Én gang om året. Tidspunkt og sted fastlægges på den forudgående
            generalforsamling. Alle medlemmer, som har betalt kontingent, kan
            møde op og stemme (men ikke med fuldmagt).
          </p>
        </div>

        <div className="faq-item">
          <h3>Hvad er kontingentet?</h3>
          <p>
            Det nuværende kontigent er 200 kr. om måneden. Det dækker udgifter
            til generalforsamlingen, indkøb til begivenheder og andre
            fornødenheder. Betaling sker via bankoverførsel til foreningens
            kasserer.
          </p>
        </div>

        <div className="faq-item">
          <h3>Skal man bedømme alle negronier man drikker?</h3>
          <p>
            Ja! Hvis du drikker en negroni uden for dit hjem, har du som medlem
            af foreningen pligt til at anmelde den. Bedømmelsen sendes til
            foreningens SoMe-ansvarlig eller i foreningens Messenger-tråd.
          </p>
        </div>

        <div className="faq-item">
          <h3>Hvordan vurderer man en negroni?</h3>
          <p>
            Du vurderer efter fem parametre: smag, is, glas, farve, og pynt –
            hver fra 1 til 10. Derudover indeholder bedømmelsen prisen på
            negronien samt eventuelle andre noteværdigheder, såsom mærket på
            gin, vermouth og bitter.
          </p>
        </div>

        <div className="faq-item">
          <h3>Hvad består den ideelle negroni af?</h3>
          <p>
			Den ideelle negroni består af lige dele gin, vermouth og
			bitter. Den skal serveres i et passende glas med “clear ice” og
			pyntes med en appelsinskal. Farven skal være dyb rød, og smagen
			skal være kompleks og afbalanceret.
		  </p>
        </div>

        <div className="faq-item">
          <h3>Hvad er “clear ice”, og hvorfor er det vigtigt?</h3>
          <p>
            “Clear ice” er is uden urenheder; altså klar is med stil. Det viser
            respekt for cocktailen og dens balance.
          </p>
        </div>

        <div className="faq-item">
          <h3>Hvad sker der, hvis et medlem ikke lever op til standarden?</h3>
          <p>
            Medlemmer kan blive udfordret uden begrundelse. Der kan også gives
            sanktioner, fx hvis nogen serverer en elendig negroni. Det afgøres
            demokratisk og med øje for alvoren.
          </p>
        </div>

        <div className="faq-item">
          <h3>Hvordan vælger man restauranten til generalforsamlingen?</h3>
          <p>
            Via simpelt flertal i Messenger-tråden. Ved stemmelighed har
            formanden det afgørende ord, medmindre han erklærer sig inhabil. I
            så fald: sten, saks, papir. Eller bordfodbold, hvis det er
            tilgængeligt.
          </p>
        </div>
      </section>
    </>
  );
};

export default FAQ;
