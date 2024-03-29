'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/events');
  }, []);

  return (
    <main className={styles.main}>
      <div></div>
    </main>
  );
}
