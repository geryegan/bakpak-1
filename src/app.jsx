import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div id={styles.body}>
        <br />
        <h1> There is gonna be something here someday! </h1>
        <h2> Maybe an infographic about how to use the site? </h2>
      </div>
    )
  }
}