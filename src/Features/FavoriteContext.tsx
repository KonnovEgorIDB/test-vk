import type { FilmShort } from './types';
import type { JSX } from 'react';

import { createContext, useEffect, useState } from 'react';

interface FavoriteContextType {
  favorite: FilmShort[];
  addToFavorite: (film: FilmShort) => void;
  removeFromFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [favorite, setFavorite] = useState<FilmShort[]>(() => {
    const saved = localStorage.getItem('favorite');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  const addToFavorite = (film: FilmShort) => {
    setFavorite((prev) => [...prev, film]);
  };

  const removeFromFavorite = (id: number) => {
    setFavorite((prev) => prev.filter((film) => film.id !== id));
  };

  const isFavorite = (id: number): boolean => {
    return favorite.some((film) => film.id === id);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorite, addToFavorite, removeFromFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export type { FavoriteContextType };
export { FavoriteContext };
