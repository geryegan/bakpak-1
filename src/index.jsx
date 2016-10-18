import React from 'react';
import { render } from 'react-dom';
import styles from './index.scss';
import App from './app.jsx';
import Nav from './nav.jsx';

render(<App />, document.querySelector("#app"));
render(<Nav />, document.querySelector("#nav"));
