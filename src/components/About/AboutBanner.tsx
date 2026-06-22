import styles from "./AboutBanner.module.css";

interface AboutBannerProps {
  title?: string;
  breadcrumb?: string;
}

export default function AboutBanner({
  title = "About Us",
  breadcrumb = "HOME / ABOUT US",
}: AboutBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{breadcrumb}</p>
      </div>
    </section>
  );
}
