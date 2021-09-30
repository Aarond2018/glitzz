import React from 'react'

import { Link } from 'react-router-dom'
import app from '../../Firebase/firebase'
/* import { GoogleAuthProvider } from "firebase/auth"; */
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'

import styles from './SignIn.module.css'

export default function SignIn() {
  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log({
          token,
          credential,
          user
        })
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        console.log({
          errorCode,
          errorMessage,
          email,
          credential
        })
      });
    
  }

  return (
    <>
      <Header /> 

      <section className={`${styles.main} container`}>
        <div className={styles.imageBg}></div>
        <div className={styles.content}>
          <h3>Sign In</h3>
          <button onClick={signInGoogle}> Sign In with Google</button>
          <p>Do not have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </section>

      <Footer />
    </>
  )
}
