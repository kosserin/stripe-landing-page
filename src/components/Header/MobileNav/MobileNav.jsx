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
        <button onClick={closeButtonHandler}><FaTimes /></button>
        <div className={styles['mobile-lists']}>
          <div className={styles['mobile-columns']}>
            <h3>Products</h3>
            <ul>
              <li>
                <a href="#">
                  <Blob />
                  <div className={styles['products-list__text']}>
                    <h4><span>Payments</span><FaChevronRight /></h4>
                    <h5>Online payments</h5>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <div className={styles['products-list__text']}>
                    <h4><span>Payments</span><FaChevronRight /></h4>
                    <h5>Online payments</h5>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <div className={styles['products-list__text']}>
                    <h4><span>Payments</span><FaChevronRight /></h4>
                    <h5>Online payments</h5>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <Blob />
                  <div className={styles['products-list__text']}>
                    <h4><span>Payments</span><FaChevronRight /></h4>
                    <h5>Online payments</h5>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default MobileNav