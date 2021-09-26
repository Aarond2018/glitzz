import React from 'react'

import styles from './header.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles["header-top"]}>
        <div className={`${styles["container-top"]} container`}>
          <p>Welcome to Glitzz store.....</p>
          <ul>
            <li><a href=""><i className="fas fa-map-marker-alt"></i>Contact</a></li>
            <li><a href=""><i className="far fa-question-circle"></i>Need help</a></li>
            <li><a href=""><i className="far fa-user"></i>Sign in</a><a href=""> / Register</a></li>
          </ul>
        </div>
      </div>

      <div className={styles["header-main"]}>
        <div className={`${styles["container-main"]} container`}>
            <div className={styles["main-part1"]}>
              <div className={styles.logo}><i className="fas fa-store-alt"></i><h3>Glitzz</h3></div>
              <div className={styles.input}><input type="text"></input><i className="fas fa-search"></i></div>
            </div>
            <ul className={styles["main-part2"]}>
              <li>
                <a href=""><i className="fas fa-phone"></i><div><p>Call us now: </p><span>0(800) 123-456</span></div></a>
              </li>
              <li className={styles["li-heart"]}>
                <a href=""><i className="far fa-heart"></i></a>
              </li>
              <li className={styles["li-shop"]}>
                {/* <a href="">Shopping Cart: <span>$0.00</span><i className="fas fa-shopping-bag"><div></div></i></a> */}
                <a href=""><div><p>Call us now: </p><span>0(800) 123-456</span></div><i className="fas fa-shopping-bag"><div></div></i></a>
              </li>
            </ul>
        </div>
      </div>

      <div className={styles["header-bottom"]}>
        <div className={`${styles["container-bottom"]} container`}>
          <ul className={styles["bottom-part1"]}>
            <li><a href="">Home</a></li>
            <li><a href="">Categories</a>
              <ul className={styles["hidden-list"]}>
                <li><a href="">Clothings</a></li>  
                <li><a href="">Clothings</a></li>  
                <li><a href="">Clothings</a></li>  
              </ul>  
            </li>
            <li><a href="">Contact Us </a></li>
            <li><a href="">About Us</a></li>
          </ul>
          <a href="" className={styles["bottom-part2"]}><i className="fas fa-tags"></i>Special Offers</a>
        </div>
      </div>
    </header>
  )
}

