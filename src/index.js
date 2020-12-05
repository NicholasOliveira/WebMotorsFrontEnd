import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import App from './App';

Sentry.init({
  dsn: process.env.CREATE_REACT_APP_SENTRY,
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  tracesSampleRate: 1.0,
});

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body, html, #root{
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
  }
  body, html, #root, button, input, textarea, select{
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
    font-smooth: antialiased;
    border: 0;
    outline: 0;
    background: none;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0px;
    padding: 0px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);
