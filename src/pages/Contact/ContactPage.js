import React from 'react'

import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'

import styles from './ContactPage.module.css'

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className={`${styles.subHeader} container`}>
        <i class="fas fa-home"></i> 
        <p> {'>'} Contact Us</p>
      </div>
      <section className={styles.display}>
        <h1>Contact Us</h1>
      </section>
      <form className={styles.form}>
        <h4>Let's Connect</h4>
        <p>Your email address will not be published. Required fields are marked *</p>
        
        <textarea placeholder="Comment*" rows="6"></textarea>
        <div>
          <input type="text" placeholder="Name*"></input>
          <input type="email" placeholder="Email*"></input>
        </div>
        <button className={styles.button}>Post Comment <i className="fas fa-arrow-right"></i></button>
      </form>

      <Footer />
    </>
  )
}
