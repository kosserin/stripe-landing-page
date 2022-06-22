import React from 'react';
import {FaBars, FaBookOpen, FaChevronRight, FaTimes, FaWallet} from '../../../../node_modules/react-icons/fa';
import { ReactComponent as Blob } from '../../../assets/blob.svg';

import styles from './MobileNav.module.css';

const MobileNav = (props) => {

    const closeButtonHandler = () => {
        props.onClose();
    }

  return (
    <nav className={styles['mobile-nav']}>
        <button className={styles['close-btn']} onClick={closeButtonHandler}><FaTimes /></button>
        <div className={styles['mobile-lists']}>
          <div className={styles['mobile-columns']}>
            <h3>Products</h3>
            <ul>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <h4>Online</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['mobile-columns']}>
            <h3>Solutions</h3>
            <ul>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['mobile-columns']}>
            <ul>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['mobile-columns']}>
          <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaBookOpen />
                  <h4>Ecommerce</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles['mobile-button']}>
          <button className={styles['sign-in__btn']}>Sign in <FaChevronRight /></button>
        </div>
      </nav>
  )
}

export default MobileNav