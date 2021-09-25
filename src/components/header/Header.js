import React from 'react'

import styles from './header.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles["header-top"]}>
        <div className={`${styles.container} container`}>
          <p>Welcome to Glitzz store.....</p>
          <ul>
            <li><a href=""><i className="fas fa-map-marker-alt"></i>Contact</a></li>
            <li><a href=""><i className="far fa-question-circle"></i>Need help</a></li>
            <li><a href=""><i className="far fa-user"></i>Sign in</a><a href=""> / Register</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}


{/* <i class="fas fa-store-alt"></i> */}
