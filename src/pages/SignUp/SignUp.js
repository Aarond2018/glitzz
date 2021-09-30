import React from 'react'

import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'

import styles from './SignUp.module.css'

export default function SignUp() {

  return (
    <>
      <Header />

        <section className={`${styles.main} container`}>
          <div className={styles.imageBg}></div>
          <div className={styles.content}>
            <h3>Sign Up</h3>
            <button> Sign Up with Google</button>
            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
          </div>
        </section>

      <Footer />
    </>
  )
}
