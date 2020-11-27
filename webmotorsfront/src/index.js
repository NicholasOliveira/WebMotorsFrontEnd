import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

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
