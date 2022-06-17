import React from 'react';
import {FaBars, FaChevronRight} from '../../../node_modules/react-icons/fa';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">kossipe</a>
      <nav>
        <ul className={styles['nav-links']}>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Company</a>
          </li>
        </ul>
      </nav>
      <button className={styles['sign-in__btn']}>Sign in <FaChevronRight /></button>
      <button className={styles['burger-menu__btn']}><FaBars /></button>
    </header>
  )
}

export default Header