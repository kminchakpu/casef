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
  tagline = "/ CTA /",
  heading = "Support Us On Game Day",
  description = "Purchase tickets to our next game and experience the exhilarating atmosphere at the stadium!",
  buttonText = "Get Tickets",
  buttonHref = "/tickets"
}: CallToActionProps) {
  return (
    <section className={styles.container}>
      {/* Visual / Image Side */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/player.png" 
          alt="Soccer player action shot"
          width={600}
          height={500}
          priority
          className={styles.playerImage}
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