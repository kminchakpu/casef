"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
  isButton?: boolean;
}

const navigationMenu: NavItem[] = [
  {
    label: 'Who We Are',
    href: '#',
    dropdownItems: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Mission & Vision', href: '/mission-vision' },
      { label: 'Aims & Objectives', href: '/aims-objectives' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    label: 'What We Do',
    href: '#',
    dropdownItems: [
      { label: 'Programs', href: '/programs' },
      { label: 'Projects', href: '/projects' },
      { label: 'Impact', href: '/impact' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    label: 'Get Involved',
    href: '#',
    dropdownItems: [
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Partner with Us', href: '/partner' },
    ],
  },
  { label: 'Contact', href: '/contact' },
  {
    label: 'Donate',
    href: '/donate.html',
    isButton: true,
  },
];

export default function Navbar(): React.JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo Section */}
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/logo.png"         
            alt="Startup Logo"     
            width={60}              
            height={60}           
            className={styles.logoImage} 
            priority                
          />
          <span className={styles.logoText}>CASEF</span>
        </Link>

        {/* Dynamic Navigation Menu */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navigationMenu.map((item: NavItem) => {
              // Special Render case for the standalone Donate Button
              if (item.isButton) {
                return (
                  <li key={item.label} className={styles.navItem}>
                    <Link href={item.href} className={styles.donateBtn}>
                      {item.label}
                    </Link>
                  </li>
                );
              }

              // Standard dropdown menu items
              return (
                <li key={item.label} className={`${styles.navItem} ${styles.hasDropdown}`}>
                  <div className={styles.navLink}>
                    {item.label}
                    <svg
                      className={styles.dropdownIcon}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {item.dropdownItems && (
                    <ul className={styles.dropdownMenu}>
                      {item.dropdownItems.map((subItem: DropdownItem) => (
                        <li key={subItem.label}>
                          <Link href={subItem.href} className={styles.dropdownLink}>
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Theme Action Toggler */}
        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            aria-label="Toggle theme"
            type="button"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}