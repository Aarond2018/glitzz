import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import styles from './MobileNav.module.css'

const MobileNav = (props) => {
  const [searchValue, setSearchValue] = useState("")

  const history = useHistory()

  const onSearchInputChange = e => {
    setSearchValue(e.target.value)
  }

  const onSearchSubmit = () => {
    setSearchValue("")
    if (searchValue.trim() === "") {
      return 
    }
    props.closeNav()
    history.push(`/search?value=${searchValue}`)
  }

  return (
    <div className={!props.displayMobileNav ? styles["mobile-nav"] : `${styles["mobile-nav"]} ${styles.show}`}>
      <nav className={styles.nav}>
        <div>
          <input type="text" onChange={onSearchInputChange} value={searchValue} placeholder="Search a Product"></input>
          <div onClick={onSearchSubmit}><i className="fas fa-search"></i></div>
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