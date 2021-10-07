import React from 'react'

import styles from './Loader.module.css'
import loader from '../../Assets/loader.svg'

export default function Loader() {
  return (
    <div className={styles.loader}>
      <img src={loader} alt=""></img>
    </div>
  )
}
