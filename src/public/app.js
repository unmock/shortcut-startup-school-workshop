/**
 * Client hydration
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const AppWithRouter = () => (
  <App />
);

ReactDOM.hydrate(<AppWithRouter />, document.getElementById('root'));
