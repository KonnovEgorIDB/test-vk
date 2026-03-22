import type { FavoriteContextType } from './FavoriteContext';

import { useContext } from 'react';

import { FavoriteContext } from './FavoriteContext';

export const useFavorite = (): FavoriteContextType => {
  const context = useContext(FavoriteContext);
  if (!context)
    throw new Error('useFavorite must be used within FavoriteProvider');
  return context;
};
