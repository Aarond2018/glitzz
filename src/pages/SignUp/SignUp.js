import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { userActions } from '../../store/userSlice'

import { Link, useHistory } from 'react-router-dom'
// import app from '../../Firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from '../../Firebase/firebase'
import { collection, addDoc, getDocs } from "firebase/firestore";

import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'

import styles from './SignUp.module.css'

export default function SignUp() {
  const [error, setError] = useState("")

  const history = useHistory()
  const dispatch = useDispatch()

  const firebaseSync = (user) => {
    const add = async () => {
      const users = []
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      /* console.log(doc.id, " => ", doc.data()); */
      
      users.push(doc.data())
    
    });
    if (users.find(p=>p.email === user.email)) {
      setError('User already exist, Sign in instead')

    } else {
      try {
        const docRef = addDoc(collection(db, "users"), {
          uID : user.uid,
          name : user.displayName,
          email : user.email,
          cart : [],
          record : []
        });
        console.log("Document written with ID: ", docRef.id);
        dispatch(userActions.signIn({
          uID : user.uid,
          name : user.displayName,
          email : user.email,
          cart : [],
          record : []
        }))
        history.push('/')
      
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
      
    }

    }
    add()
    

  }
  
  const signUpGoogle = () => {
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
          user
        })
        firebaseSync(result.user)

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
            <h3>Sign Up</h3>
            <button onClick={signUpGoogle}> Sign Up with Google</button>
            {error && <p className={styles.error}>{error}</p>}
            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
          </div>
        </section>

      <Footer />
    </>
  )
}
