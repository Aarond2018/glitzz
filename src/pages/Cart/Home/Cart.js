import React from "react";

import { Route, Link, Switch, NavLink } from "react-router-dom";

import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/header/Header";
import Checkout from "../Checkout/Checkout";
import OrderComplete from "../OrderComplete/OrderComplete";

import styles from "./Cart.module.css";
import CartItems from "./CartItems";

export default function Home() {
	return (
		<>
			<Header />

			<section className="container">
				<ul className={styles.nav}>
					<li>
						<NavLink activeClassName={styles.active} to="/cart">
							1. Shopping Cart
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={styles.active} to="/cart/checkout">
							2. Checkout
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={styles.active} to="/cart/complete">
							3. Order Complete
						</NavLink>
					</li>
				</ul>
        
				<div>
					<Route exact path="/cart">
						<CartItems />
					</Route>
					<Route exact path="/cart/checkout">
						<p>checkout</p>
					</Route>
					<Route exact path="/cart/complete">
						<p>Complete</p>
					</Route>
				</div>
			</section>

			<Footer />
		</>
	);
}
