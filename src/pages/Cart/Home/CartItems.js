import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { usePaystackPayment } from "react-paystack";

import { Link } from "react-router-dom";
import { userActions } from "../../../store/userSlice";

import styles from "./Cart.module.css";

let totalPrice = 0;

export default function CartItems() {
	const [payStatus, setPayStatus] = useState("")

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.users.cart); 
	const user = useSelector((state) => state.users); 

	const initializePayment = usePaystackPayment({
		reference: new Date().getTime().toString(),
		email: user.email,
		amount: totalPrice * 100,
		publicKey: process.env.REACT_APP_PAYSTACK_TEST_KEY,
	});

	const onSuccess = (reference) => {
		// Implementation for whatever you want to do with reference and after success call.
		setPayStatus(reference)
	};

	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed paystack");
	};

	

	//Get the total price of items in the cart
	if (cart) {
		cart.length !== 0
			? (totalPrice = cart
					.map((p) => p.price * p.quantity)
					.reduce((a, b) => a + b))
			: (totalPrice = 0);
	} else {
		return;
	}

	const handleDelete = (id) => {
		dispatch(userActions.removeFromCart(id));
	};

	const handleIncrement = (id) => {
		dispatch(userActions.increaseQuantity(id));
	};

	const handleDecrement = (id) => {
		dispatch(userActions.decreaseQuantity(id));
	};

	return (
		<div className={styles.main}>
			<div className={styles["main-items"]}>
				{cart.length === 0 ? (
					<p>No Items in Cart</p>
				) : (
					cart.map((item) => {
						return (
							<div key={item.id} className={styles["main-item"]}>
								<div className={styles["main-item__image"]}>
									<img src={item.image} alt=""></img>
								</div>
								<div>
									<h5>{item.title}</h5>
								</div>
								<p>${item.price}</p>
								<div className={styles.quantity}>
									<button onClick={() => handleDecrement(item.id)}>-</button>
									<div>
										<p>{item.quantity}</p>
									</div>
									<button onClick={() => handleIncrement(item.id)}>+</button>
								</div>
								<div
									className={styles.delete}
									onClick={() => handleDelete(item.id)}
								>
									<i className="far fa-trash-alt"></i>
								</div>
							</div>
						);
					})
				)}
				<Link to="/products">Continue Shopping</Link>
			</div>
			<div className={styles["main-total"]}>
				<h4>Cart Totals</h4>
				<div>
					<p>Subtotal</p>
					<p>${totalPrice.toFixed(2)}</p>
				</div>
				<button
					disabled={cart.length === 0 || !user.isSignnedIn}
					onClick={() => {
						setPayStatus("")
						initializePayment(onSuccess, onClose);
					}}
				>
					{!user.isSignnedIn ? "Sign in to pay" : "Pay with Paystack"}
				</button>
				{payStatus && (
					<>
						<p>{`${payStatus.status}`}</p>
						<p>{`Reference ID: ${payStatus.reference}`}</p>
					</>
				)}
			</div>
		</div>
	);
}
