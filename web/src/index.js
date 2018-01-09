import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './utilities/global.js';
import 'flexboxgrid';
import '@fortawesome/fontawesome';
import 'loaders.css';

render(<App />, document.getElementById('root'));

registerServiceWorker();
