import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
    <nav>
    <div id={styles.navbar} className="nav-wrapper">
      <a> <img src="http://i.imgur.com/QfK30Pv.png" id={styles.logo} href="#" className="brand-logo" /></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li ><a href="">EXPLORE</a></li>
          <li ><a href="">RESERVE</a></li>
          <li>
            <form>  
              <input placeholder="Where are we going?" id={styles.search} type="search" required />
            </form>
          </li>
        </ul>
    </div>
  </nav>
    )
  }
}