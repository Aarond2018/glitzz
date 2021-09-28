import React from 'react'

import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}><i className="fas fa-store-alt"></i><h3>Glitzz</h3></div>
        <ul>
          <li><a>Contact Info</a>
            <ul>
              <li><a href="">About Us</a></li>
              <li><p><span>Phone: </span> (234) 809909998</p></li>
              <li><p>enquiry@glitzz.com</p></li>
            </ul>
          </li>
          <li><a>My Account</a>
            <ul>
              <li><a href="">Sign In</a></li>
              <li><a href="">View Cart</a></li>
              <li><a href="">My Wishlist</a></li>
            </ul>
          </li>
          
        </ul>

        <p>Glitzz e-Commerce &copy; 2021. Made with &hearts; by dAMi</p>
      </div>
    </div>
  )
}
