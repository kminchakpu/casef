import React from 'react';
import Link from 'next/link';
import styles from './Features.module.css';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.JSX.Element;
}

const featureData: FeatureCard[] = [
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship Development',
    description: 'Building successful businesses through training, financial literacy, business planning, and enterprise growth support.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: 'vocational',
    title: 'Technical & Vocational Training',
    description: 'Providing practical skills that create employment opportunities and promote economic independence.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.738.09-1.454.257-2.136" />
      </svg>
    ),
  },
  {
    id: 'digital',
    title: 'Digital Innovation & Skills',
    description: 'Equipping individuals with digital knowledge and technology-driven opportunities for the modern world.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.214.116c1.556.842 3.42.842 4.976 0l.214-.116M6 12h12M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
      </svg>
    ),
  },
  {
    id: 'communities',
    title: 'Community Empowerment',
    description: "Strengthening communities through targeted interventions and sustainable development initiatives.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
];

export default function Features(): React.JSX.Element {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        
        {/* Top Header Block split into columns */}
        <div className={styles.topRow}>
          <div className={styles.titleColumn}>
            <span className={styles.badge}>— OUR PROGRAMS</span>
            <h2 className={styles.mainHeading}>Empowering Communities Through Sustainable Development</h2>
          </div>
          
          <div className={styles.descColumn}>
            <p className={styles.introParagraph}>
              CASEF designs and implements transformative programs that equip individuals, strengthen communities, and foster social entrepreneurship for lasting impact.,{' '}
              <Link href="/contact" className={styles.inlineLink}>
                please contact our consultants
              </Link>{' '}
              in any convenient way.
            </p>
          </div>
        </div>

        {/* Feature Grid Mapping */}
        <div className={styles.grid}>
          {featureData.map((feature: FeatureCard) => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.iconContainer}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}