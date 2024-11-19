'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useRouter } from '@/i18n/routing';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <div className={styles.ctas}></div>
        <button onClick={() => router.push('/user')}>Post</button>
      </main>
    </div>
  );
}
