import Image from 'next/image';
import Link from 'next/link';
import styles from './CallToAction.module.css';

interface CallToActionProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CallToAction({
  tagline = "/ Get Involved /",
  heading = "Support Us In Impacting Lives",
  description = "Your contribution to CASEF helps fuel sustainable programs, empower local communities, and create lasting real-world impact—donate today to be part of the change!",
  buttonText = "Donate Now",
  buttonHref = "/donate"
}: CallToActionProps) {
  return (
    <section className={styles.container}>
      {/* Visual / Image Side */}
      <div className={styles.imageWrapper}>
        <Image
          src="/farmer.png" 
          alt="Farmer carrying Basket"
          width={600}
          height={800}
          priority
          className={styles.farmerImage}
        />
      </div>

      {/* Text / Copy Side */}
      <div className={styles.contentWrapper}>
        <span className={styles.tagline}>{tagline}</span>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
        
        <Link href={buttonHref} className={styles.button}>
          <span>{buttonText}</span>
          <span className={styles.arrow} aria-hidden="true">&gt;</span>
        </Link>
      </div>
    </section>
  );
}