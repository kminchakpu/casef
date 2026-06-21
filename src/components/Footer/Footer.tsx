"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.JSX.Element;
  href: string;
  ariaLabel: string;
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Useful Links',
    links: [
      { label: 'Programs', href: '/programs' },
      { label: 'Projects', href: '/projects' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Terms',
    links: [
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Donate', href: '/donate' },
      { label: 'Get Involved', href: '/get-involved' },
      { label: 'Volunteer', href: '/volunteer' },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    ariaLabel: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
      </svg>
    ),
  },
  {
    ariaLabel: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    ariaLabel: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    ariaLabel: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer(): React.JSX.Element {
  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      {/* Decorative Blur Spheres / Corner Pieces */}
      <div className={styles.leftDecoration} />
      <div className={styles.rightBlur} />

      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Brand/About Segment */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logoContainer}>
              <Image
                src="/logo.png"          
                alt="Startup Logo"      
                width={32}              
                height={32}             
                className={styles.logoImage} 
                priority               
              />
              <span className={styles.logoText}>CASEF</span>
            </Link>
            <p className={styles.brandDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.
            </p>
            <div className={styles.socialRow}>
              {socialLinks.map((social: SocialLink, index: number) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={social.ariaLabel}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Column Mapping */}
          <div className={styles.linksGrid}>
            {footerColumns.map((column: FooterColumn) => (
              <div key={column.title} className={styles.linksColumn}>
                <h3 className={styles.columnTitle}>{column.title}</h3>
                <ul className={styles.columnList}>
                  {column.links.map((link: FooterLink) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            Designed and Developed by{' '}
            <a href="#" className={styles.attributionLink}>
              Kevin Cross Minchakpu
            </a>{' '}
            . Powered by{' '}
            <a href="#" className={styles.attributionLink}>
              Octate Systems
            </a>
          </p>

          {/* Back to Top Floating Arrow button */}
          <button
            onClick={handleScrollToTop}
            className={styles.scrollTopButton}
            aria-label="Scroll to top"
            type="button"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="13 9 8 4 3 9" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}