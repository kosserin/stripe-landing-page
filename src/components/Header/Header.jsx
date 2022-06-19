import React from 'react';
import {FaBars, FaBookOpen, FaChevronRight, FaWallet} from '../../../node_modules/react-icons/fa';
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
                <div className={styles['products-column']}>
                <h3>Payments</h3>
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
                <div className={styles['products-column']}>
                <h3>Payments</h3>
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
                <div className={styles['products-column']}>
                <h3>Payments</h3>
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
                </ul>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
            <span>Solutions</span>
            <div className={styles['solutions-list']}>
            <div className={`${styles.triangle} ${styles['solutions-triangle']}`}></div>
            <div className={styles['solutions-column']}>
            <h3>Use cases</h3>
            <ul>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['solutions-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['solutions-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['solutions-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['solutions-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['solutions-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['solutions-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['solutions-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['solutions-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
            </ul>
            </div>
            <div className={styles['solutions-column']}>
            <h3>Use cases</h3>
            <ul>
              <li>
                <a href="#">
                  <FaWallet />
                  <div className={styles['solutions-list__text']}>
                    <h4>Payments</h4>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWallet />
                  <div className={styles['solutions-list__text']}>
                    <h4>Payments</h4>
                  </div>
                </a>
              </li>
            </ul>
            </div>
            </div>
            </a>
          </li>
          <li>
            <a href="#">
            <span>Developers</span>
            <div className={styles['developers-list']}>
              <div className={`${styles.triangle} ${styles['developers-triangle']}`}></div>
              <a href="#" className={styles['documentation-anchor']}>
                <FaBookOpen />
                <div className={styles['developers-list__text']}>
                  <h4><span>Payments</span><FaChevronRight /></h4>
                  <h5>Online payments</h5>
                </div>
              </a>
              <div className={styles['developers-columns']}>
                <div className={styles['developers-column']}>
                  <h3>Get started</h3>
                  <ul>
                    <li><a href="#">Prebuilt checkout</a></li>
                    <li><a href="#">Prebuilt checkout</a></li>
                    <li><a href="#">Prebuilt checkout</a></li>
                    <li><a href="#">Prebuilt checkout</a></li>
                  </ul>
                </div>
                <div className={styles['developers-column']}>
                  <h3>Get started</h3>
                  <ul>
                    <li><a href="#">Prebuilt checkout</a></li>
                    <li><a href="#">Prebuilt checkout</a></li>
                    <li><a href="#">Prebuilt checkout</a></li>
                    <li><a href="#">Prebuilt checkout</a></li>
                  </ul>
                </div>
              </div>
              <ul>
              <li>
                <a href="#">
                  <FaWallet />
                  <div className={styles['developers-list__text']}>
                    <h4>Payments</h4>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWallet />
                  <div className={styles['developers-list__text']}>
                    <h4>Payments</h4>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWallet />
                  <div className={styles['developers-list__text']}>
                    <h4>Payments</h4>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWallet />
                  <div className={styles['developers-list__text']}>
                    <h4>Payments</h4>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWallet />
                  <div className={styles['developers-list__text']}>
                    <h4>Payments</h4>
                  </div>
                </a>
              </li>
            </ul>
            </div>
            </a>
          </li>
          <li>
            <a href="#">
            <span>Company</span>
            <div className={styles['company-list']}>
              <div className={`${styles.triangle} ${styles['company-triangle']}`}></div>
              <ul>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['developers-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['developers-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['developers-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['developers-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['developers-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['developers-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['developers-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaWallet />
                    <div className={styles['developers-list__text']}>
                      <h4>Payments</h4>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
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