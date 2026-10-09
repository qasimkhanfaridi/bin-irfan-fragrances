import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { initAnalytics } from './utils/analytics';

const whenStylesReady = (run: () => void): void => {
  if (document.documentElement.classList.contains('styles-ready')) {
    run();
    return;
  }

  const links = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')).filter(
    link => link.href && !link.href.includes('fonts.googleapis.com')
  );

  const pending = links.filter(link => {
    try {
      return link.sheet === null;
    } catch {
      return true;
    }
  });

  if (pending.length === 0) {
    document.documentElement.classList.add('styles-ready');
    run();
    return;
  }

  let remaining = pending.length;
  const finish = () => {
    remaining -= 1;
    if (remaining <= 0) {
      document.documentElement.classList.add('styles-ready');
      run();
    }
  };

  pending.forEach(link => {
    link.addEventListener('load', finish, { once: true });
    link.addEventListener('error', finish, { once: true });
  });
};

initAnalytics();

whenStylesReady(() => {
  const root = document.getElementById('root');
  if (!root) {
    return;
  }

  root.classList.add('app-loaded');
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
