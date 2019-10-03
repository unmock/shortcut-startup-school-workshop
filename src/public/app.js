/**
 * Client hydration
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Note: this is broken, the data would need to be passed to the client to properly hydrate the dom.
ReactDOM.hydrate(<App />, document.getElementById('root'));
