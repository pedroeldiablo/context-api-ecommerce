import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { CustomButton } from '../custom-button/custom-button.component';
import { CartItem, Item } from '../cart-item/cart-item.component';
import { CartContext } from '../../providers/cart/cart.provider';

import './cart-dropdown.styles.scss';

export const CartDropdown = withRouter(({ history }) => {
	const { cartItems, toggleHidden } = useContext(CartContext);

	console.log({ cartItems });

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => <CartItem key={(cartItem as Item["item"]).id} item={cartItem} />)
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					toggleHidden();
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
});
