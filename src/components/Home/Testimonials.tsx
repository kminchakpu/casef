import React from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

interface TestimonialCard {
  id: string;
  quote: string;
  name: string;
  subtext: string;
  avatarUrl: string;
}

const testimonialData: TestimonialCard[] = [
  {
    id: 'martinez-family',
    quote: '"Before joining the CASEF Empowerment Program, I had the passion to start a business but lacked the knowledge, skills, and confidence to move forward. Through the entrepreneurship and vocational training provided by CASEF, I learned practical business management skills, financial literacy, and effective strategies for growing a sustainable enterprise. The support and mentorship I received transformed my mindset and equipped me with the tools needed to become self-reliant."'
,
    name: 'Ibrahim Jatau',
    subtext: 'Members since 2019',
    avatarUrl: '/images/avatar1.jpg', 
  },
  {
    id: 'james-k',
    quote: '"Today, I operate my own small business, generate a steady income, and contribute to the well-being of my family and community. CASEF did not just teach me a skill—it gave me hope, direction, and the opportunity to build a better future. I am sincerely grateful for the positive impact this program has had on my life."',
    name: 'Chidinma K.',
    subtext: 'Member since 2022',
    avatarUrl: '/images/avatar2.jpg',
  },
  {
    id: 'michelle-t',
    quote: '"Joining the CASEF Empowerment Program was a turning point in my life. I had always dreamed of starting my own business, but I lacked the confidence and knowledge to take that leap. Through the program, I gained valuable skills in entrepreneurship, financial management, and personal development. The mentorship and support I received were invaluable, helping me to overcome challenges and stay motivated."',
    name: 'Janet Ogwuche.',
    subtext: 'Member since 2025',
    avatarUrl: '/images/avatar3.jpg',
  },
];

export default function Testimonials(): React.JSX.Element {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <span className={styles.badge}>STORIES</span>
          <h2 className={styles.heading}>Real People. Real Hope.</h2>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className={styles.grid}>
          {testimonialData.map((item: TestimonialCard) => (
            <div key={item.id} className={styles.card}>
              
              {/* Golden Stylized Quotation Mark */}
              <div className={styles.quoteIconRow}>
                <svg 
                  className={styles.quoteIcon} 
                  width="36" 
                  height="36" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M4.583 17.321C4.553 12.227 7.429 9.38 12 8.79l.107 1.407c-3.11.399-4.636 1.905-4.577 4.519h4.303v5.604H4.583v-3 zoom-in.001zm9.167 0c-.03-5.094 2.846-7.941 7.417-8.531l.107 1.407c-3.11.399-4.636 1.905-4.577 4.519h4.303v5.604h-7.25v-3.001z" />
                </svg>
              </div>

              {/* Review Text */}
              <p className={styles.quoteText}>{item.quote}</p>

              {/* Author Footer Profile Details */}
              <div className={styles.profileRow}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={item.avatarUrl}
                    alt={`${item.name} profile portrait`}
                    width={40}
                    height={40}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.metaText}>
                  <h4 className={styles.authorName}>{item.name}</h4>
                  <span className={styles.authorSubtext}>{item.subtext}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}