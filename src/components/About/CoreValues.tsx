import React from 'react';
import styles from './CoreValues.module.css';

interface ValueCard {
  id: string;
  title: string;
  description: string;
  icon: React.JSX.Element;
}

const valuesData: ValueCard[] = [
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'We uphold absolute transparency, accountability, and the highest ethical standards in all of our strategic activities and community engagements.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'We are committed to designing and delivering elite-tier programs and services that meet global best practices and consistently exceed stakeholder expectations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We embrace creative thinking and champion forward-looking approaches that drive long-term, sustainable development and deep community transformation.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'inclusiveness',
    title: 'Inclusiveness',
    description: 'We promote equitable opportunities, intentionally ensuring that vulnerable and marginalized groups gain full access to life-changing empowerment initiatives.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: 'service',
    title: 'Service',
    description: 'We are fiercely dedicated to uplifting individuals and improving livelihoods through genuine compassion, deep professionalism, and high-impact interventions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'We build dynamic, cross-sector partnerships and foster unified teamwork to co-create sustainable solutions that no single entity could achieve alone.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function CoreValues(): React.JSX.Element {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <span className={styles.badge}>OUR CORE VALUES</span>
          <h2 className={styles.heading}>The Values That Drive Us</h2>
          <p className={styles.subheading}>
           At the Centre for Advancement and Social Entrepreneurship Foundation (CASEF), our core values define who we are and guide everything we do. They shape our decisions, strengthen our relationships, and inspire our commitment to empowering individuals, fostering sustainable development, and creating lasting social impact. These values reflect our dedication to integrity, excellence, innovation, accountability, collaboration, and service as we work to transform lives and build stronger, more resilient communities.

          </p>
        </div>

        {/* 3-Column Values Matrix Grid */}
        <div className={styles.grid}>
          {valuesData.map((item: ValueCard) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconBox}>
                {item.icon}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}