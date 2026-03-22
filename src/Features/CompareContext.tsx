import type { JSX } from 'react';
import type { FilmShort } from './types';

import { createContext, useContext, useEffect, useState } from 'react';

interface CompareContextType {
    compare: FilmShort[];
    addToCompare: (film: FilmShort) => void;
    removeFromCompare: (id: number) => void;
    isInCompare: (id: number) => boolean;
}

const CompareContext = createContext<CompareContextType | null>(null);

export const CompareProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [compare, setCompare] = useState<FilmShort[]>(() => {
        const saved = localStorage.getItem('compare');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('compare', JSON.stringify(compare));
    }, [compare]);

    const addToCompare = (film: FilmShort) => {
        if (compare.length >= 2) return;
        setCompare((prev) => [...prev, film]);
    };

    const removeFromCompare = (id: number) => {
        setCompare((prev) => prev.filter((film) => film.id !== id));
    };

    const isInCompare = (id: number): boolean => {
        return compare.some((film) => film.id === id);
    };

    return (
        <CompareContext.Provider value={{ compare, addToCompare, removeFromCompare, isInCompare }}>
            {children}
        </CompareContext.Provider>
    );
};

export const useCompare = (): CompareContextType => {
    const context = useContext(CompareContext);
    if (!context) throw new Error('useCompare must be used within CompareProvider');
    return context;
};