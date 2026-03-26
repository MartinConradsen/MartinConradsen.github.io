import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from './PageWrapper';
import Footer from './Footer';
import '../styles/recommendations.css';

const SHOW_IMAGES = false;

interface Item {
  name: string;
  description: string;
  image?: string;
  buyUrl: string;
  buyLabel: string;
}

interface Category {
  title: string;
  subtitle: string;
  items: Item[];
}

const categories: Category[] = [
  {
    title: 'Gin',
    subtitle: 'Ingrediens 1',
    items: [
      {
        name: 'Tanqueray',
        description: 'Klassisk London Dry med enebær, koriander og citrus. En pålidelig og alsidig base, der giver negronieen en ren og frisk karakter.',
        buyUrl: 'https://www.pricerunner.dk/results?q=tanqueray',
        buyLabel: 'Find på Pricerunner',
      },
      {
        name: 'Monkey 47',
        description: '47 botanicals fra Schwarzwald i Tyskland, inklusiv lokale urter og bær. Kompleks, aromatisk og overraskende - giver negronieen dybde og karakter.',
        buyUrl: 'https://www.pricerunner.dk/results?q=monkey%2047',
        buyLabel: 'Find på Pricerunner',
      },
      {
        name: 'The Botanist',
        description: '22 håndplukkede skotske urter og botanicals fra Islay. Delikat, blomstret og overraskende velsmagende i en negroni.',
        buyUrl: 'https://www.pricerunner.dk/results?q=the%20botanist',
        buyLabel: 'Find på Pricerunner',
      },
    ],
  },
  {
    title: 'Vermouth Rosso',
    subtitle: 'Ingrediens 2',
    items: [
      {
        name: 'Cocchi Vermouth di Torino',
        description: 'Tørre, bitre noter med stikkelsbær og appelsin. Et raffineret og historisk alternativ fra Asti.',
        buyUrl: 'https://www.pricerunner.dk/results?q=cocchi%20vermouth%20di%20torino',
        buyLabel: 'Find på Pricerunner',
      },
      {
        name: 'Antica Formula',
        description: 'Den klassiske valg. Rig på vanilje, bitter chokolade og tørret frugt - skabt til negroni.',
        buyUrl: 'https://www.pricerunner.dk/results?q=antica%20formula',
        buyLabel: 'Find på Pricerunner',
      },
      {
        name: 'Bordiga Rosso',
        description: 'Italiensk vermouth med en kraftig, bitter profil og noter af urter og krydderier. Et mere robust valg for dem der ønsker en negroni med kant.',
        buyUrl: 'https://www.pricerunner.dk/results?q=bordiga%20rosso%20vermouth',
        buyLabel: 'Find på Pricerunner',
      },
    ],
  },
  {
    title: 'Bitter',
    subtitle: 'Ingrediens 3',
    items: [
      {
        name: 'Campari',
        description: 'Originalen og standarden. Bitter, frugtig og uundværlig. Ingen diskussion.',
        buyUrl: 'https://www.pricerunner.dk/results?q=campari%20bitter',
        buyLabel: 'Find på Pricerunner',
      }
    ],
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

const Recommendations: React.FC = () => (
  <PageWrapper>
    <section className="rec">
      <h1>Anbefalede ingredienser</h1>
      <p className="rec-subtitle">Foreningens udvalgte · opdateret løbende</p>
      {categories.map((cat) => (
        <div key={cat.title} className="rec-category">
          <div className="rec-category-header">
            <h2 className="rec-category-title">{cat.title}</h2>
            <span className="rec-category-subtitle">{cat.subtitle}</span>
          </div>

          <motion.div
            className="rec-grid"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {cat.items.map((item) => (
              <motion.div key={item.name} className="rec-card" variants={cardVariants}>
                {SHOW_IMAGES && (
                  <div className="rec-card-image">
                    {item.image
                      ? <img src={item.image} alt={item.name} />
                      : <span className="rec-card-placeholder">{item.name[0]}</span>
                    }
                  </div>
                )}
                <div className="rec-card-body">
                  <h3 className="rec-card-name">{item.name}</h3>
                  <p className="rec-card-description">{item.description}</p>
                </div>
                <div className="rec-card-footer">
                  <a
                    href={item.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rec-card-buy"
                  >
                    {item.buyLabel}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
    <Footer />
  </PageWrapper>
);

export default Recommendations;
