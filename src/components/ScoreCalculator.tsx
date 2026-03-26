import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from './PageWrapper';
import Footer from './Footer';
import '../styles/score.css';

const scoreColor = (score: number) => {
  if (score <= 4) return '#e74c3c';
  if (score <= 6) return '#e67e22';
  if (score <= 8) return '#f1c40f';
  return '#2ecc71';
};

const parameters = [
  { key: 'smag',  label: 'Smag',  weight: 1.0 },
  { key: 'is',    label: 'Is',    weight: 1.0 },
  { key: 'glas',  label: 'Glas',  weight: 1.0 },
  { key: 'farve', label: 'Farve', weight: 1.0 },
  { key: 'pynt',  label: 'Pynt',  weight: 1.0 },
] as const;

type ScoreKey = typeof parameters[number]['key'];

const ScoreCalculator: React.FC = () => {
  const [scores, setScores] = useState<Record<ScoreKey, number>>({
    smag: 5, is: 5, glas: 5, farve: 5, pynt: 5,
  });
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [copied, setCopied] = useState(false);

  const totalWeight = parameters.reduce((sum, p) => sum + p.weight, 0);
  const weightedSum = parameters.reduce((sum, p) => sum + scores[p.key] * p.weight, 0);
  const total = Math.round((weightedSum / totalWeight) * 10) / 10;

  const chartData = parameters.map(({ key, label }) => ({
    parameter: label,
    value: scores[key],
    fullMark: 10,
  }));

  const sliderBackground = (value: number) => {
    const pct = ((value - 1) / 9) * 100;
    return `linear-gradient(to right, #c0392b ${pct}%, rgba(255,255,255,0.1) ${pct}%)`;
  };

  const handleCopy = () => {
    const lines = parameters.map(({ key, label }) =>
      `${label}: ${scores[key]}/10`
    );
    const text = [
      location ? `📍 ${location}` : null,
      '─────────',
      ...lines,
      price ? `Pris: ${price}` : null,
      '─────────',
      `Total: ${total.toFixed(1)}/10`,
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <PageWrapper>
      <section className="score">
        <h1>Bedøm din negroni</h1>
        <p className="score-subtitle">Officiel DNF-bedømmelse · 5 parametre · vægtet gennemsnit</p>

        <div className="score-grid">
          {/* Sliders */}
          <div className="score-sliders">
            <div className="score-meta">
              <input
                className="score-text-input"
                type="text"
                placeholder="Lokation"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <input
                className="score-text-input"
                type="text"
                placeholder="Pris"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            {parameters.map(({ key, label }) => (
              <div key={key} className="score-parameter">
                <div className="score-parameter-header">
                  <span className="score-parameter-name">{label}</span>
                  <motion.span
                    key={scores[key]}
                    className="score-parameter-value"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    {scores[key]}
                  </motion.span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={scores[key]}
                  style={{ background: sliderBackground(scores[key]) }}
                  onChange={(e) =>
                    setScores((prev) => ({ ...prev, [key]: Number(e.target.value) }))
                  }
                />
              </div>
            ))}
          </div>

          {/* Chart + total */}
          <div className="score-chart-container">
            <ResponsiveContainer width="100%" height={260}>
              <RadarChart cx="50%" cy="50%" outerRadius="72%" data={chartData}>
                <PolarGrid stroke="rgba(255,255,255,0.08)" radialLines={false} />
                <PolarAngleAxis
                  dataKey="parameter"
                  tick={{
                    fill: '#777',
                    fontSize: 12,
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                  }}
                />
                <Radar
                  dataKey="value"
                  stroke="#c0392b"
                  fill="#c0392b"
                  fillOpacity={0.2}
                  strokeWidth={2}
                  dot={false}
                />
              </RadarChart>
            </ResponsiveContainer>

            <div className="score-total">
              <div className="score-total-number">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={total}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0, color: scoreColor(total) }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: 'inline-block' }}
                  >
                    {total.toFixed(1)}
                  </motion.span>
                </AnimatePresence>
                <span className="score-total-max">/10</span>
              </div>
              <div className="score-total-label">Samlet score</div>
            </div>

            <button
              className={`score-copy${copied ? ' copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? '✓ Kopieret' : 'Kopier til Messenger'}
            </button>
            <button
              className="score-reset"
              onClick={() => { setScores({ smag: 5, is: 5, glas: 5, farve: 5, pynt: 5 }); setLocation(''); setPrice(''); }}
            >
              Nulstil
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
};

export default ScoreCalculator;
