import React from 'react';
import Image from 'next/image';
// Link import removed because it's unused
import styles from './OurTeam.module.css';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  phone: string;
  email: string;
  avatarUrl: string;
}

const teamData: TeamMember[] = [
  {
    id: 'emmanuel-tetteh',
    name: 'Linus Tadinma',
    role: 'Executive Director & Founder',
    bio: 'Emmanuel established CASEF with a clear mission to drive community transformation. Drawing from over a decade of experience in cross-sector development, he serves as our strategic visionary, lead mentor, and operational guide.',
    phone: '+233 24 567 8901',
    email: 'e.tetteh@casef.org',
    avatarUrl: '/images/tadinma.jpeg', 
  },
  {
    id: 'chikamso',
    name: 'Chikamso Tadinma',
    role: 'Head of Programs & Inclusion',
    bio: 'Chikamso champions our grassroots empowerment initiatives. She specializes in designing scalable, inclusive community programs that directly improve access to resources for vulnerable, underserved, and marginalized populations.',
    phone: '+233 24 567 8902',
    email: 'a.bello@casef.org',
    avatarUrl: '/images/chikamso.jpeg',
  },
  {
    id: 'iyabosa',
    name: 'Iyabosa Erhabor',
    role: 'Sustainable Development Lead',
    bio: 'Iyabosa ensures every implementation framework meets global best practices for sustainability. She coordinates local and international partnerships to execute innovative, high-impact socio-economic interventions.',
    phone: '+233 24 567 8903',
    email: 'k.mensah@casef.org',
    avatarUrl: '/images/iyabosa.jpeg',
  },
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'Monitoring & Evaluation Director',
    bio: 'Sarah oversees accountability, impact data tracking, and institutional transparency parameters. Her precise, analytical review cycles guarantee that our structural services consistently exceed partner and stakeholder expectations.',
    phone: '+233 24 567 8904',
    email: 's.jenkins@casef.org',
    avatarUrl: '/images/team/sarah.jpg',
  },
];

export default function OurTeam(): React.JSX.Element {
  return (
    <section className={styles.teamSection}>
      {/* Decorative vector background shapes */}
      <div className={styles.decorativeAccentTopRight} />
      <div className={styles.decorativeAccentBottomLeft} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <h2 className={styles.heading}>Our Professional Team</h2>
          <p className={styles.subheading}>
            Our leadership brings together technical expertise, deep compassion, and strategic precision to drive CASEF&apos;s mission forward.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className={styles.grid}>
          {teamData.map((member: TeamMember) => (
            <div key={member.id} className={styles.memberCard}>
              
              {/* Profile Image with Neon Gradient Ring wrapper */}
              <div className={styles.avatarContainer}>
                <div className={styles.gradientRing}>
                  <div className={styles.imageClip}>
                    <Image
                      src={member.avatarUrl}
                      alt={`${member.name} - ${member.role}`}
                      width={130}
                      height={130}
                      priority
                      className={styles.avatarImage}
                    />
                  </div>
                </div>
              </div>

              {/* Profile Details Content */}
              <div className={styles.profileDetails}>
                <h3 className={styles.memberName}>
                  {member.name} <span className={styles.roleDivider}>/</span> <span className={styles.memberRole}>{member.role}</span>
                </h3>
                
                <p className={styles.memberBio}>{member.bio}</p>
                
                {/* Contact Meta Info Links */}
                <div className={styles.contactMeta}>
                  <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className={styles.contactLink}>
                    {member.phone}
                  </a>
                  <span className={styles.metaDivider}>|</span>
                  <a href={`mailto:${member.email}`} className={styles.contactLink}>
                    {member.email}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}