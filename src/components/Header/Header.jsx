import React, {useState} from 'react';
import {FaBars, FaBookOpen, FaChevronRight, FaWallet} from '../../../node_modules/react-icons/fa';
import DesktopNav from './DesktopNav/DesktopNav';

import styles from './Header.module.css';
import MobileNav from './MobileNav/MobileNav';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(true);
  }

  const closeMenuHandler = () => {
    setShowMenu(false);
  }


  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">kossipe</a>
      <DesktopNav />
      <button className={styles['sign-in__btn']}>Sign in<FaChevronRight /></button>
      <button onClick={showMenuHandler} className={styles['burger-menu__btn']}><FaBars /></button>
      {showMenu && <MobileNav onClose={closeMenuHandler} />}
    </header>
  )
}

export default Header