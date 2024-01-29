import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import PWA from './components/pwa';
import Route from './route';
import Base from './components/Base';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Base>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </Base>
  </React.StrictMode>,
  document.querySelector('#root'),
);
