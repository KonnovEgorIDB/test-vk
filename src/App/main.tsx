import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { BrowserRouter } from 'react-router';

import App from './App.tsx';
import { FavoriteProvider } from '../Features/FavoriteContext.tsx';
import { CompareProvider } from '../Features/CompareContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <FavoriteProvider>
            <CompareProvider>
                <App />
            </CompareProvider>
        </FavoriteProvider>
    </BrowserRouter>
  </StrictMode>,
);
