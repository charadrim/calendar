import Link from 'next/link';
import React from 'react';
import styles from '../page.module.css';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <img src="/images/logo.jpg" alt="Logo" className={styles.logoImage} />
      </Link>
    </div>
  );
};

export default Logo;
