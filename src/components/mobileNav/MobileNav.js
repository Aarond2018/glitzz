import React from 'react'

import { Link } from 'react-router-dom'

import styles from './MobileNav.module.css'

const MobileNav = (props) => {
  return (
    <div className={!props.displayMobileNav ? styles["mobile-nav"] : `${styles["mobile-nav"]} ${styles.show}`}>
      <nav className={styles.nav}>
        <div>
          <input type="text" placeholder="Search a Product"></input>
          <div></div>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/products">products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
      <div className={styles.close} onClick={()=>props.closeNav()}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  )
}

export default MobileNav