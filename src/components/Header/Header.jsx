import React from 'react';
import {FaBars, FaChevronRight} from '../../../node_modules/react-icons/fa';
import { ReactComponent as Blob } from '../../assets/blob.svg';

import styles from './Header.module.css';

const Header = () => {


  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">kossipe</a>
      <nav>
        <ul className={styles['nav-links']}>
          <li>
            <a href="#">
              <span>Products</span>
              <div className={styles['products-list']}>
                <div className={`${styles.triangle} ${styles['product-triangle']}`}></div>
                <ul>
                  <li>
                    <h3>
                    Payments
                    </h3>
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
                <ul>
                  <li>
                    <h3>
                    Payments
                    </h3>
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
                <ul>
                  <li>
                    <h3>
                    Payments
                    </h3>
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
            </a>
          </li>
          <li>
            <a href="#">
            <span>Solutions</span>
            </a>
          </li>
          <li>
            <a href="#">
            <span>Developers</span>
            </a>
          </li>
          <li>
            <a href="#">
            <span>Company</span>
            </a>
          </li>
          <li>
            <a href="#">
            <span>Pricing</span>
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles['sign-in__btn']}>Sign in <FaChevronRight /></button>
      <button className={styles['burger-menu__btn']}><FaBars /></button>
    </header>
  )
}

export default Header