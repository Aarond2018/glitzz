import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from '../../store/userSlice'

import { Link, useHistory } from 'react-router-dom'
import MobileNav from '../mobileNav/MobileNav'

import styles from './header.module.css'

export default function Header() {
  const [displayHeader, setDisplayHeader] = useState(false)
  const [displayMobileNav, setDisplayMobileNav] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const isSignnedIn = useSelector(state => state.users.isSignnedIn)
  const cartItemNo = useSelector(state => state.users.cart?.length)
  const cart = useSelector(state => state.users.cart)
  const products = useSelector(state => state.products.data)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setDisplayHeader(true) : setDisplayHeader(false)
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const dispatch = useDispatch()
  const history = useHistory()

  let totalPrice = 0;

  if (cart) {
    cart.length !== 0 ? totalPrice = cart.map(p => p.price * p.quantity).reduce((a, b) => a + b) : totalPrice = 0;
  }  

  //function to get all categories from the products
  const getCategories = products => {
    const categories = []
    products.forEach(product => {
      if(categories.includes(product.category)) return;
      categories.push(product.category)
    });
    return categories;
  }

  const categories = getCategories(products)
  
  /* const handleScroll = () => {
    window.scrollY > 100 ? setDisplayHeader(true) : setDisplayHeader(false)
  }

  window.addEventListener('scroll', handleScroll) */

  const openMobileNav = () => {
    setDisplayMobileNav(true)
  }

  const closeMobileNav = () => {
    setDisplayMobileNav(false)
  }
 
  const handleSignOut = () => {
    dispatch(userActions.signOut())
  }

  const onSearchInputChange = e => {
    setSearchValue(e.target.value)
  }

  const onSearchSubmit = () => {
    if (searchValue.trim() === "") {
      return 
    }
    setSearchValue("")
    history.push(`/search?value=${searchValue}`)
  }

  return (
    <header>
      <MobileNav displayMobileNav={displayMobileNav} closeNav={closeMobileNav}/>
      <div className={styles["header-top"]}>
        <div className={`${styles["container-top"]} container`}>
          <p>Welcome to Glitzz store.....</p>
          <ul>
            <li><Link to="/contact-us"><i className="fas fa-map-marker-alt"></i>Contact</Link></li>
            <li><Link to="/"><i className="far fa-question-circle"></i>Need help</Link></li>
            {isSignnedIn ? 
              <li onClick={handleSignOut}><Link to="/"><i className="fas fa-sign-out-alt"></i>Sign Out</Link></li> : 
              <li><Link to="/signin"><i className="far fa-user"></i>Sign in</Link><Link to="/signup"> / Register</Link></li>
            }
          </ul>
        </div>
      </div>

      <div className={!displayHeader ? styles["header-main"] : `${styles["header-main"]} ${styles["header-main-scroll"]}`}>
        <div className={`${styles["container-main"]} container`}>
            <div className={styles["main-part1"]}>
              <i className="fas fa-bars" onClick={openMobileNav}></i>
              <Link to="/">
                <div className={styles.logo}><i className="fas fa-store-alt"></i><h3>Glitzz</h3></div>
              </Link>
              <div className={styles.input}><input type="text" onChange={onSearchInputChange}></input><i className="fas fa-search" onClick={onSearchSubmit}></i></div>
            </div>
            <ul className={styles["main-part2"]}>
              <li>
                <Link to="/"><i className="fas fa-phone"></i><div><p>Call us now: </p><span>0(800) 123-456</span></div></Link>
              </li>
              <li className={styles["li-heart"]}>
                <Link to="/"><i className="far fa-heart"></i></Link>
              </li>
              <li className={styles["li-shop"]}>
                {/* <Link to="">Shopping Cart: <span>$0.00</span><i className="fas fa-shopping-bag"><div></div></i></Link> */}
                <Link to="/cart"><div><p>Shopping Cart </p><span>${totalPrice.toFixed(2)}</span></div><i className="fas fa-shopping-bag"><p>{cartItemNo}</p></i></Link>
              </li>
            </ul>
        </div>
      </div>

      <div className={styles["header-bottom"]}>
        <div className={`${styles["container-bottom"]} container`}>
          <ul className={styles["bottom-part1"]}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Categories</Link>
              <ul className={styles["hidden-list"]}>  
                {categories && categories.map((category, index) => <li key={index}><Link to="/">{category}</Link></li>)}
              </ul>  
            </li>
            <li><Link to="/contact-us">Contact Us </Link></li>
            <li><Link to="/">About Us</Link></li>
          </ul>
          <Link to="/" className={styles["bottom-part2"]}><i className="fas fa-tags"></i>Special Offers</Link>
        </div>
      </div>
    </header>
  )
}

