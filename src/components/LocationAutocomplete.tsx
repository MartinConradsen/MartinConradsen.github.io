import React, { useEffect, useId, useRef, useState } from 'react';

type PlacePrediction = {
  placeId: string;
  text: { toString: () => string };
};

type PlacesLibrary = {
  AutocompleteSuggestion: {
    fetchAutocompleteSuggestions: (request: {
      input: string;
      language: string;
      region: string;
      locationBias: {
        center: { lat: number; lng: number };
        radius: number;
      };
    }) => Promise<{ suggestions: Array<{ placePrediction?: PlacePrediction }> }>;
  };
};

type GoogleMapsWindow = Window & {
  google?: {
    maps: {
      importLibrary: (name: 'places') => Promise<PlacesLibrary>;
    };
  };
  __dnfGoogleMapsLoaded?: () => void;
};

const COPENHAGEN = { lat: 55.6761, lng: 12.5683 };
let placesLibraryPromise: Promise<PlacesLibrary> | undefined;

const loadPlacesLibrary = (apiKey: string) => {
  if (placesLibraryPromise) return placesLibraryPromise;

  placesLibraryPromise = new Promise<PlacesLibrary>((resolve, reject) => {
    const mapsWindow = window as GoogleMapsWindow;

    const importPlaces = () => {
      if (!mapsWindow.google?.maps.importLibrary) {
        reject(new Error('Google Maps could not be loaded.'));
        return;
      }
      mapsWindow.google.maps.importLibrary('places').then(resolve).catch(reject);
    };

    if (mapsWindow.google?.maps.importLibrary) {
      importPlaces();
      return;
    }

    mapsWindow.__dnfGoogleMapsLoaded = importPlaces;
    const script = document.createElement('script');
    const params = new URLSearchParams({
      key: apiKey,
      loading: 'async',
      callback: '__dnfGoogleMapsLoaded',
      v: 'weekly',
    });
    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.async = true;
    script.onerror = () => reject(new Error('Google Maps could not be loaded.'));
    document.head.appendChild(script);
  }).catch((error) => {
    placesLibraryPromise = undefined;
    throw error;
  });

  return placesLibraryPromise;
};

type LocationAutocompleteProps = {
  value: string;
  onChange: (value: string) => void;
};

const LocationAutocomplete: React.FC<LocationAutocompleteProps> = ({ value, onChange }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim();
  const listId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const latestRequest = useRef(0);
  const skipNextSearch = useRef(false);
  const [suggestions, setSuggestions] = useState<PlacePrediction[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick);
  }, []);

  useEffect(() => {
    const query = value.trim();
    const requestId = ++latestRequest.current;

    if (skipNextSearch.current) {
      skipNextSearch.current = false;
      return;
    }

    if (!apiKey || query.length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    const timeout = window.setTimeout(async () => {
      try {
        const { AutocompleteSuggestion } = await loadPlacesLibrary(apiKey);
        const result = await AutocompleteSuggestion.fetchAutocompleteSuggestions({
          input: query,
          language: 'da',
          region: 'dk',
          locationBias: {
            center: COPENHAGEN,
            radius: 50_000,
          },
        });

        if (requestId !== latestRequest.current) return;
        const predictions = result.suggestions
          .map(({ placePrediction }) => placePrediction)
          .filter((prediction): prediction is PlacePrediction => Boolean(prediction));
        setSuggestions(predictions);
        setActiveIndex(-1);
        setOpen(predictions.length > 0);
      } catch {
        if (requestId !== latestRequest.current) return;
        setSuggestions([]);
        setOpen(false);
      }
    }, 300);

    return () => window.clearTimeout(timeout);
  }, [apiKey, value]);

  const selectSuggestion = (prediction: PlacePrediction) => {
    skipNextSearch.current = true;
    onChange(prediction.text.toString());
    setSuggestions([]);
    setOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggestions.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? suggestions.length - 1 : current - 1));
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();
      selectSuggestion(suggestions[activeIndex]);
    } else if (event.key === 'Escape') {
      setOpen(false);
      setActiveIndex(-1);
    }
  };

  return (
    <div className="location-autocomplete" ref={containerRef}>
      <input
        className="score-text-input"
        type="text"
        placeholder="Lokation"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setOpen(suggestions.length > 0)}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined}
        autoComplete="off"
      />

      {open && (
        <div className="location-suggestions" id={listId} role="listbox">
          {suggestions.map((prediction, index) => (
            <button
              key={prediction.placeId}
              id={`${listId}-${index}`}
              type="button"
              role="option"
              aria-selected={index === activeIndex}
              className={`location-suggestion${index === activeIndex ? ' active' : ''}`}
              onPointerDown={(event) => event.preventDefault()}
              onClick={() => selectSuggestion(prediction)}
            >
              {prediction.text.toString()}
            </button>
          ))}
          <div className="location-attribution">
            <img
              src="https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-non-white3.png"
              alt="Powered by Google"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationAutocomplete;
