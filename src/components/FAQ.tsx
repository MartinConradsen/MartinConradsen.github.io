import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "./PageWrapper";
import "../styles/faq.css";

const faqs = [
  {
    q: "Hvordan bliver man medlem af Dansk Negroniforening?",
    a: "Du skal inviteres af et eksisterende medlem og derefter godkendes på generalforsamlingen. Du skal elske negroni, kunne fortælle dens historie, og som noget helt særligt: servere den perfekte negroni for alle medlemmer ved generalforsamlingen.",
  },
  {
    q: "Hvornår og hvordan afholdes generalforsamlingen?",
    a: "Én gang om året. Tidspunkt og sted fastlægges på den forudgående generalforsamling. Alle medlemmer, som har betalt kontingent, kan møde op og stemme (men ikke med fuldmagt).",
  },
  {
    q: "Hvad er kontingentet?",
    a: "Det nuværende kontigent er 100 kr. om måneden. Det dækker udgifter til generalforsamlingen, indkøb til begivenheder og andre fornødenheder. Betaling sker via bankoverførsel til foreningens kasserer.",
  },
  {
    q: "Skal man bedømme alle negronier man drikker?",
    a: "Ja! Hvis du drikker en negroni uden for dit hjem, har du som medlem af foreningen pligt til at anmelde den. Bedømmelsen sendes til foreningens SoMe-ansvarlig eller i foreningens Messenger-tråd.",
  },
  {
    q: "Hvordan vurderer man en negroni?",
    a: "Du vurderer efter fem parametre: smag, is, glas, farve, og pynt – hver fra 1 til 10. Derudover indeholder bedømmelsen prisen på negronien samt eventuelle andre noteværdigheder, såsom mærket på gin, vermouth og bitter.",
  },
  {
    q: "Hvad består den ideelle negroni af?",
    a: 'Den ideelle negroni består af lige dele gin, vermouth og bitter. Den skal serveres i et passende glas med én stor klump "clear ice" og pyntes med en appelsinskal. Farven skal være dyb rød, og smagen skal være kompleks og afbalanceret.',
  },
  {
    q: 'Hvad er "clear ice", og hvorfor er det vigtigt?',
    a: '"Clear ice" er is uden urenheder; altså klar is med stil. Det viser respekt for cocktailen og dens balance.',
  },
  {
    q: "Hvad sker der, hvis et medlem ikke lever op til standarden?",
    a: "Medlemmer kan blive udfordret uden begrundelse. Der kan også gives sanktioner, fx hvis nogen serverer en elendig negroni. Det afgøres demokratisk og med øje for alvoren.",
  },
  {
    q: "Hvordan vælger man restauranten til generalforsamlingen?",
    a: "Via simpelt flertal i Messenger-tråden. Ved stemmelighed har formanden det afgørende ord, medmindre han erklærer sig inhabil. I så fald: sten, saks, papir. Eller bordfodbold, hvis det er tilgængeligt.",
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <PageWrapper>
      <section className="faq">
        <h1>Ofte stillede spørgsmål</h1>
        <motion.div
          className="faq-list"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`faq-item${openIndex === i ? " open" : ""}`}
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="faq-answer-text">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default FAQ;
