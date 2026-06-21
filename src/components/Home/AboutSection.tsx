import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutSection.module.css';

export default function AboutSection(): React.JSX.Element {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Left Side: Frame Image Content */}
        <div className={styles.imageColumn}>
          <div className={styles.imageFrame}>
            <div className={styles.imageWrapper}>
              <Image
                src="/woman.jpg"
                alt="corporate woman"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.featuredImage}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text Narrative Content */}
        <div className={styles.contentColumn}>
          <div className={styles.taglineRow}>
            <span className={styles.slashDecoration}>\</span>
            <span className={styles.tagline}>WELCOME TO CASEF</span>
            <span className={styles.slashDecoration}>\</span>
          </div>

          <h2 className={styles.title}>
            PEOPLE, PASSION, AND EXCELLENCE
          </h2>

          <p className={styles.leadText}>
            Inspiring Hope, Creating Opportunities, Changing Lives
          </p>

          <div className={styles.bodyTextContainer}>
            <p className={styles.bodyText}>
              Nigeria continues to face significant socio-economic challenges, including unemployment, poverty, and limited access to skills development opportunities. These challenges disproportionately affect vulnerable populations, particularly youths and women.
            </p>
            <p className={styles.bodyText}>
              CASEF was established to address these challenges through practical skills acquisition, entrepreneurship development, vocational education, and empowerment initiatives that promote self-reliance and economic resilience.
            </p>
          </div>

          <Link href="/about-us" className={styles.moreButton}>
            <span>More About Us</span>
            <svg 
              className={styles.buttonArrow}
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}