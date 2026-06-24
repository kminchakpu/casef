import React from 'react';
import styles from './MissionVision.module.css';

interface StatementCard {
  id: string;
  badge: string;
  text: string;
}

const statementData: StatementCard[] = [
  {
    id: 'mission',
    badge: 'OUR MISSION',
    text: 'To empower individuals and communities through quality skills acquisition, entrepreneurship development, vocational training, digital literacy, and social welfare initiatives that foster sustainable livelihoods and long-term socio-economic transformation.',
  },
  {
    id: 'vision',
    badge: 'OUR VISION',
    text: 'To be a leading organization in skills development, entrepreneurship, and social empowerment, delivering innovative and sustainable solutions that promote economic self-reliance, social inclusion, and community development in Nigeria and beyond.',
  },
];

export default function MissionVision(): React.JSX.Element {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {statementData.map((item: StatementCard) => (
            <div key={item.id} className={styles.card}>
              <span className={styles.badge}>{item.badge}</span>
              <h4 className={styles.statementText}>{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}