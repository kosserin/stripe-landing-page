import React from 'react';
import {FaChevronRight} from '../../../node_modules/react-icons/fa';

import styles from './ContentText.module.css';

const ContentText = () => {
  return (
    <div className={styles['content-text']}>
        <div className={styles['content-first']}>
          <span>Stripe Sessions 2022</span>
          <ul>
            <li>
              <a href="#">
                Watch now on demand <FaChevronRight />
              </a>
            </li>
          </ul>
        </div>
          <h1>Payments<br/>infrastructure<br/>for the internet</h1>
          <p>Millions of companies of all sizes - from startups to Fortune 500s - use Kossipe's software and APIs to accept payments, send payouts, and manage their businesses online.</p>
          <div className={styles['content-actions']}>
            <a className={styles['primary-btn']} href="#">Start now <FaChevronRight /></a>
            <a className={styles['secondary-btn']} href="#">Contact sales <FaChevronRight /></a>
          </div>
        </div>
  )
}

export default ContentText