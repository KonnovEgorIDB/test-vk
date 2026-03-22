import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { BrowserRouter } from 'react-router';

import { CompareProvider } from '../Features/CompareContext.tsx';
import { FavoriteProvider } from '../Features/FavoriteContext.tsx';
import App from './App.tsx';

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
