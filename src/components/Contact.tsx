import React, { useState } from 'react';
import PageWrapper from './PageWrapper';
import Footer from './Footer';
import '../styles/contact.css';

type SubmissionState = 'idle' | 'sending' | 'success' | 'error';

const endpoint = 'https://formsubmit.co/ajax/1cfb97f6f3f49709b09cc4929ba8d0ff';

const Contact: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [topic, setTopic] = useState('Anbefaling');

  const clearValidationMessage = <
    T extends HTMLInputElement | HTMLTextAreaElement
  >(event: React.FormEvent<T>) => {
    event.currentTarget.setCustomValidity('');
  };

  const showValidationMessage = <
    T extends HTMLInputElement | HTMLTextAreaElement
  >(event: React.InvalidEvent<T>) => {
    const field = event.currentTarget;

    if (field.validity.valueMissing) {
      field.setCustomValidity('Udfyld venligst dette felt.');
      return;
    }

    if (field instanceof HTMLInputElement && field.type === 'email' && field.validity.typeMismatch) {
      field.setCustomValidity('Angiv venligst en gyldig e-mailadresse.');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionState('sending');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Anmodningen mislykkedes');
      }

      form.reset();
      setTopic('Anbefaling');
      setSubmissionState('success');
    } catch {
      setSubmissionState('error');
    }
  };

  return (
    <PageWrapper>
      <section className="contact">
        <div className="contact-heading">
          <h1>Kontakt</h1>
          <p>Send os en anbefaling, et spørgsmål eller en god negroni-observation.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="Ny henvendelse fra Dansk Negroni Forening" />
          <input type="hidden" name="_template" value="table" />

          <div className="contact-grid">
            <label className="contact-field">
              <span>Navn</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                maxLength={200}
                required
                onInput={clearValidationMessage}
                onInvalid={showValidationMessage}
              />
            </label>

            <label className="contact-field">
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                maxLength={200}
                required
                onInput={clearValidationMessage}
                onInvalid={showValidationMessage}
              />
            </label>
          </div>

          <label className="contact-field">
            <span>Hvad handler det om?</span>
            <select
              name="topic"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
            >
              <option>Anbefaling</option>
              <option>Spørgsmål</option>
              <option>Samarbejde</option>
              <option>Andet</option>
            </select>
          </label>

          {topic === 'Anbefaling' && (
            <label className="contact-field">
              <span>Lokation</span>
              <input
                type="text"
                name="place_recommendation"
                placeholder="Bar eller restaurant"
                maxLength={200}
              />
            </label>
          )}

          <label className="contact-field">
            <span>Besked</span>
            <textarea
              maxLength={2000}
              name="message"
              rows={7}
              placeholder="Fortæl os, hvad vi bør vide."
              required
              onInput={clearValidationMessage}
              onInvalid={showValidationMessage}
            />
          </label>

          <label className="contact-honeypot" aria-hidden="true">
            <span>Lad dette felt være tomt</span>
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
          </label>

          <div className="contact-actions">
            <button type="submit" disabled={submissionState === 'sending'}>
              {submissionState === 'sending' ? 'Sender...' : 'Send besked'}
            </button>
            <p
              className={`contact-status${submissionState === 'error' ? ' error' : ''}`}
              role="status"
              aria-live="polite"
            >
              {submissionState === 'success' && 'Tak. Din besked er sendt.'}
              {submissionState === 'error' && 'Beskeden kunne ikke sendes lige nu. Prøv igen.'}
            </p>
          </div>
        </form>
      </section>
      <Footer />
    </PageWrapper>
  );
};

export default Contact;
