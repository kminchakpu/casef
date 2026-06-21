"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero(): React.JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* Left Side: Content Context */}
        <div className={styles.contentSide}>
          <span className={styles.subtitle}>— CASEF —</span>
          <h1 className={styles.title}>
            Empowering People,<br />Strengthening Communities!
          </h1>
          <p className={styles.description}>
            The Centre for Advancement and Social Entrepreneurship Foundation (CASEF) promotes sustainable development, social innovation, and economic empowerment through community-driven initiatives and strategic partnerships.
          </p>
          <Link href="/donate.html" className={styles.ctaButton}>
            Support Our Cause
          </Link>
        </div>

        {/* Right Side: Composite Imagery Section */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <Image
              src="/african.png" 
              alt="African women smiling"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className={styles.mainWomenImage}
            />
          </div>
        </div>

      </div>
    </section>
  );
}