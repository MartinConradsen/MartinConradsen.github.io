import React from "react";
import { Link } from "react-router-dom";
import appListScreenshot from "../assets/app/negronikortet-list.webp";
import appMapScreenshot from "../assets/app/negronikortet-map.webp";
import negroniImage from "../assets/general_negroni.jpg";
import logo from "../assets/dnf_logo_transparent.png";
import FadeIn from "./FadeIn";
import "../styles/about.css";

const featureLinks = [
	{
		number: "01",
		title: "Find",
		description:
			"Gå på opdagelse i foreningens bedømmelser fra barer nær og fjern.",
		href: "https://negronikortet.dk/",
		label: "Åbn Negronikortet",
	},
	{
		number: "02",
		title: "Bedøm",
		description:
			"Giv din Negroni en officiel DNF-score på smag, is, glas, farve og pynt.",
		to: "/score",
		label: "Start bedømmelsen",
	},
	{
		number: "03",
		title: "Bland",
		description:
			"Se foreningens udvalgte gin, vermouth og bitter til den rette blanding.",
		to: "/recommendations",
		label: "Se ingredienserne",
	},
];

const About: React.FC = () => (
	<>
		<section className="home-hero">
			<div className="home-hero-copy">
				<span className="home-kicker">
					Dansk Negroni Forening · Må Generalen være med dig
				</span>
				<h1>
					Bitter.
					<br />
					Balanceret.
					<br />
					<em>Ufravigelig.</em>
				</h1>
				<p className="home-hero-lead">
					Vi dokumenterer, bedømmer og forsvarer verdens bedste cocktail. Én
					Negroni ad gangen.
				</p>
				<div className="home-actions">
					<a
						className="home-button home-button-primary"
						href="https://negronikortet.dk/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Udforsk negronikortet
					</a>
					<Link className="home-button home-button-secondary" to="/score">
						Bedøm en Negroni
					</Link>
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
					En hyldest til den klassiske Negroni, og et fællesskab for dem, der
					værdsætter balance, håndværk og kompromisløs enkelhed.
				</p>
			</section>
		</FadeIn>

		<FadeIn className="app-launch-fade">
			<section className="home-map" id="negronikortet-app">
				<div className="app-copy">
					<span className="home-section-label">Negronikortet er live</span>
					<h2>Byens bedste Negroni. Lige ved hånden.</h2>
					<p>
						Find barer i nærheden, se foreningens bedømmelser, og gem dine
						favoritter. Negronikortet er klar til brug direkte i din browser.
					</p>
					<ul className="app-highlights" aria-label="Negronikortets funktioner">
						<li>Find de bedste steder</li>
						<li>Se scores og billeder</li>
						<li>Gem dine favoritter</li>
					</ul>
					<a
						className="home-button home-button-primary app-browser-link"
						href="https://negronikortet.dk/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Åbn Negronikortet
						<span aria-hidden="true">↗</span>
					</a>
					<div className="app-store-badges" aria-label="Negronikortet som app">
						<a
							className="app-store-badge app-store-badge-link"
							href="https://apps.apple.com/dk/app/negronikortet/id6809344372?l=da"
							aria-label="Hent Negronikortet i App Store"
						>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.28c1.35.07 2.29.74 3.08.79 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.13v-.01ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z" />
							</svg>
							<span>
								<small>Hent i</small>
								<strong>App Store</strong>
							</span>
						</a>
						<div className="app-store-badge">
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M3.18 2.26a2 2 0 0 0-.18.83v17.82c0 .3.06.58.18.83l9.72-9.74-9.72-9.74Zm10.66 10.68-2.17 2.17-7.1 7.12c.3.12.64.13.97-.05l11.39-6.47-3.09-2.77ZM4.57 1.77l9.27 9.29 3.08-2.77L5.54 1.82a1.1 1.1 0 0 0-.97-.05Zm13.56 7.2-3.35 3 3.35 3.01 2.98-1.69c.8-.45.8-1.16 0-1.62l-2.98-1.7Z" />
							</svg>
							<span>
								<small>Kommer snart på</small>
								<strong>Google Play</strong>
							</span>
						</div>
					</div>
				</div>
				<div className="app-preview" aria-label="Skærmbilleder fra Negronikortet">
					<img
						className="app-screenshot app-screenshot-list"
						src={appListScreenshot}
						alt="Negronikortets liste over højt bedømte barer"
						loading="lazy"
						width="774"
						height="1678"
					/>
					<img
						className="app-screenshot app-screenshot-map"
						src={appMapScreenshot}
						alt="Negronikortets kort over bedømte barer i København"
						loading="lazy"
						width="774"
						height="1678"
					/>
				</div>
			</section>
		</FadeIn>

		<section className="home-features" aria-label="Udforsk foreningen">
			{featureLinks.map((feature, index) => {
				const content = (
					<>
						<span className="feature-number">{feature.number}</span>
						<h2>{feature.title}</h2>
						<p>{feature.description}</p>
						<span className="feature-cta">
							{feature.label} <span aria-hidden="true">↗</span>
						</span>
					</>
				);

				return (
					<FadeIn
						key={feature.number}
						delay={index * 0.06}
						className="feature-fade"
					>
						{feature.to ? (
							<Link className="home-feature" to={feature.to}>
								{content}
							</Link>
						) : (
							<a
								className="home-feature"
								href={feature.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{content}
							</a>
						)}
					</FadeIn>
				);
			})}
		</section>

		<FadeIn>
			<section className="home-manifesto">
				<span className="home-section-label">Vores manifest</span>
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
					<span className="history-caption">
						Pascal-Olivier de Negroni · Generalen
					</span>
				</div>
				<div className="history-copy">
					<span className="home-section-label">Negroniens oprindelse</span>
					<h2>En skål for Generalen.</h2>
					<p>
						Den mest udbredte fortælling begynder i Firenze omkring 1919, hvor
						Camillo Negroni bad bartender Fosco Scarselli gøre sin Americano
						stærkere ved at erstatte danskvand med gin. Måske var det begyndelsen
						på den Negroni, vi kender i dag.
					</p>
					<p>
						Vi foretrækker historien fra Saint-Louis i Senegal i 1857. Her skal
						den franske officer Pascal-Olivier de Negroni have skabt en
						vermouthbaseret cocktail til en bryllupsfest. Et bevaret brev til
						hans bror omtaler opfindelsen. Senere blev Pascal-Olivier general,
						hvilket selvfølgelig beviser, at Negroni forbedrer alle aspekter af
						livet.
					</p>
					<p>
						Sandheden er uklar, men mellem den rigtige historie og den bedste har
						vi valgt den bedste. Derfor skåler Dansk Negroni Forening for
						Generalen.
					</p>
				</div>
			</section>
		</FadeIn>
	</>
);

export default About;
