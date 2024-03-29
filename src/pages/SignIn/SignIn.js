import React from 'react'

import { userActions } from '../../store/userSlice'

import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
// import app from '../../Firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from '../../Firebase/firebase'
import { collection, getDocs } from "firebase/firestore";

import Footer from '../../components/Footer/Footer'
import Header from '../../components/header/Header'

import styles from './SignIn.module.css'

export default function SignIn() {
  const history = useHistory()
  const dispatch = useDispatch()
  
  const firebaseSync = (user) => {
    const add = async () => {
      //get the list of all users into an array and check if a user already exist
      const users = []
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      /* console.log(doc.id, " => ", doc.data()); */
      
      users.push(doc.data()) 
    
    });
    const userData = (users.find(p=>p.email === user.email))
    document.cookie = `userData=${JSON.stringify(userData)}`
    /* const d = document.cookie.split('; ').find(row => row.startsWith('userData='))
    .split('=')[1]; */
    
    dispatch(userActions.signIn(userData))
    // history.push("/")
    history.goBack()
    }
    add()
  }


  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        
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
          <h3>Sign In</h3>
          <button onClick={signInGoogle}> Sign In with Google</button>
          <p>Do not have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </section>

      <Footer />
    </>
  )
}
