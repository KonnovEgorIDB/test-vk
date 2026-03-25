import type { FilmCompare } from './types';
import type { JSX } from 'react';

import { createContext, useEffect, useState } from 'react';

interface CompareContextType {
  compare: FilmCompare[];
  addToCompare: (film: FilmCompare) => void;
  removeFromCompare: (id: number) => void;
  isInCompare: (id: number) => boolean;
}

const CompareContext = createContext<CompareContextType | null>(null);

export const CompareProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [compare, setCompare] = useState<FilmCompare[]>(() => {
    const saved = localStorage.getItem('compare');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('compare', JSON.stringify(compare));
  }, [compare]);

  const addToCompare = (film: FilmCompare) => {
    if (compare.length < 2) {
      setCompare((prev) => [...prev, film]);
    } else {
      setCompare((prev) => [prev[0], film]);
    }
  };

  const removeFromCompare = (id: number) => {
    setCompare((prev) => prev.filter((film) => film.id !== id));
  };

  const isInCompare = (id: number): boolean => {
    return compare.some((film) => film.id === id);
  };

  return (
    <CompareContext.Provider
      value={{ compare, addToCompare, removeFromCompare, isInCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export type { CompareContextType };
export { CompareContext };
