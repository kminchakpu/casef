import React from 'react';
import styles from './ImpactStats.module.css';

interface StatItem {
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  { value: '24', label: 'Skilled coaches' },
  { value: '35', label: 'Business areas' },
  { value: '805', label: 'Clients in 2020' },
  { value: '3,946', label: 'Hours of personal consultations' },
];

export default function ImpactStats(): React.JSX.Element {
  return (
    <section className={styles.statsSection}>
      {/* Optional overlay background mask if you want to place a subtle world map graphic later */}
      <div className={styles.backgroundImageOverlay} />

      <div className={styles.container}>
        {/* Header Block Section */}
        <div className={styles.headerBlock}>
          <span className={styles.badge}>Our Impact in Numbers</span>
          <h2 className={styles.heading}>Creating Lasting Change Across Communities</h2>
          <p className={styles.subheading}>
            Through entrepreneurship, skills development, and community empowerment, CASEF continues to create opportunities and improve livelihoods for individuals and communities.
          </p>
        </div>

        {/* Statistical Counter Numbers Grid */}
        <div className={styles.statsGrid}>
          {statsData.map((item: StatItem, index: number) => (
            <div key={index} className={styles.statCard}>
              <span className={styles.statValue}>{item.value}</span>
              <p className={styles.statLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}