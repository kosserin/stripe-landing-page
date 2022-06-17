import React from 'react';
import { ReactComponent as ContentImage } from '../../assets/phone.svg';

import styles from './Content.module.css';
import ContentText from './ContentText';

const Content = () => {
  return (
    <section className={styles.content}>
        <div className={styles['content-background']}></div>
        <div className={styles['content-holder']}>
          <ContentText />
          <div className={styles['content-image']}>
            <ContentImage />
          </div>
        </div>
    </section>
  )
}

export default Content