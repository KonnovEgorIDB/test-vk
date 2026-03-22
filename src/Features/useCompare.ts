import type { CompareContextType } from './CompareContext';

import { useContext } from 'react';

import { CompareContext } from './CompareContext';

export const useCompare = (): CompareContextType => {
  const context = useContext(CompareContext);
  if (!context)
    throw new Error('useCompare must be used within CompareProvider');
  return context;
};
