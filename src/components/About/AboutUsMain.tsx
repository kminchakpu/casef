import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutUsMain.module.css';

export default function AboutUsMain(): React.JSX.Element {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Left Content Side */}
        <div className={styles.contentSide}>
          <div className={styles.taglineRow}>
            <span className={styles.slash}>/</span>
            <span className={styles.tagline}>ABOUT US</span>
            <span className={styles.slash}>/</span>
          </div>

          <h2 className={styles.title}>
            Transforming Lives, Strengthening Communities
          </h2>

          <div className={styles.descriptionBlock}>
            <p className={styles.paragraph}>
              The Centre for Advancement and Social Entrepreneurship Foundation (CASEF) is a non-governmental organization dedicated to empowering individuals, strengthening communities, and promoting sustainable development through entrepreneurship, skills acquisition, and community-based initiatives.
            </p>
            <p className={styles.paragraph}>
              At CASEF, we believe that lasting social and economic transformation begins when people are equipped with the knowledge, skills, and opportunities needed to improve their lives. Through entrepreneurship development, vocational and technical skills training, digital literacy programs, and community empowerment initiatives, we help individuals unlock their potential and become active contributors to their communities.
            </p>
          </div>
        </div>
          
        {/* Right Athlete Image Side */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <Image
              src="/mechanic.png"
              alt="A mechanic holding tyre"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              priority
              className={styles.farmerImage}
            />
          </div>
        </div>

      </div>
    </section>
  );
}