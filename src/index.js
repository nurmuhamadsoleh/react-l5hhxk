import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//Merupakan sebuah Component dengan ciri2 Huruf Kapilatal di awal
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* <Nav> */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
