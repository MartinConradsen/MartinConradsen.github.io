import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import '../styles/age-gate.css';

type AgeAnswer = 'accepted' | 'declined' | null;
const storageKey = 'dnf-age-confirmation';

function readAnswer(): AgeAnswer {
  try {
    const answer = window.localStorage.getItem(storageKey);
    return answer === 'accepted' || answer === 'declined' ? answer : null;
  } catch {
    return null;
  }
}

export default function AgeGate({ children }: { children: ReactNode }) {
  const [answer, setAnswer] = useState<AgeAnswer>(readAnswer);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (answer === 'accepted') return;

    const dialog = dialogRef.current;
    dialog?.showModal();
    headingRef.current?.focus();

    return () => dialog?.close();
  }, [answer]);

  const saveAnswer = (nextAnswer: AgeAnswer) => {
    try {
      if (nextAnswer === null) {
        window.localStorage.removeItem(storageKey);
      } else {
        window.localStorage.setItem(storageKey, nextAnswer);
      }
    } catch {
      // The current visit still works when browser storage is unavailable.
    }
    setAnswer(nextAnswer);
  };

  if (answer === 'accepted') return children;

  const declined = answer === 'declined';

  return (
    <div className="age-gate">
      <dialog
        ref={dialogRef}
        className="age-gate-dialog"
        aria-labelledby="age-gate-title"
        aria-describedby="age-gate-description"
        onCancel={(event) => event.preventDefault()}
      >
        <p className="age-gate-brand">Dansk Negroni Forening</p>
        <span className="age-gate-badge" aria-hidden="true">18+</span>
        <h1 id="age-gate-title" ref={headingRef} tabIndex={-1}>
          {declined ? 'Denne side er for voksne' : 'Er du fyldt 18 år?'}
        </h1>
        <p id="age-gate-description" className="age-gate-description">
          {declined
            ? 'Du skal være fyldt 18 år for at besøge siden.'
            : 'Vores hjemmeside og Negronikortet handler om cocktails og er for personer på 18 år og derover.'}
        </p>
        <div className="age-gate-actions">
          {declined ? (
            <button type="button" className="age-gate-secondary" onClick={() => saveAnswer(null)}>
              Jeg svarede forkert
            </button>
          ) : (
            <>
              <button type="button" className="age-gate-primary" onClick={() => saveAnswer('accepted')}>
                Ja, jeg er fyldt 18 år
              </button>
              <button type="button" className="age-gate-secondary" onClick={() => saveAnswer('declined')}>
                Nej, jeg er under 18 år
              </button>
            </>
          )}
        </div>
        <p className="age-gate-note">Vi husker dit svar i denne browser.</p>
      </dialog>
    </div>
  );
}
