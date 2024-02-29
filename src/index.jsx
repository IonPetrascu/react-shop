import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
const domNode = document.getElementById('root');
const root = createRoot(domNode);
import { store } from './features/store';
import { Provider } from 'react-redux';

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
