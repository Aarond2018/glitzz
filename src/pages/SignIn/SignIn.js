import React from 'react'

import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'

import styles from './SignIn.module.css'

export default function SignIn() {
  return (
    <>
      <Header /> 

      <section className={`${styles.main} container`}>
        <div className={styles.imageBg}></div>
        <div className={styles.content}>
          <h3>Sign In</h3>
          <button> Sign In with Google</button>
          <p>Do not have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </section>

      <Footer />
    </>
  )
}
