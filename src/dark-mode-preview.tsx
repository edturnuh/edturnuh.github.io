import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DarkModePreview from './app/DarkModePreview';
import './styles/index.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <DarkModePreview />
  </StrictMode>
);
