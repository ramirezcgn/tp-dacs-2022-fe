import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.nav_button}>
          <Link href="/">
            <a><p>Home</p></a>
          </Link>
        </li>
        <li className={styles.nav_button}>
          <Link href="/packages">
            <a><p>Paquetes</p></a>
          </Link>
        </li>
        <li className={styles.nav_button}>
          <Link href="/about">
            <a><p>About</p></a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
