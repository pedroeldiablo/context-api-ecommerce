import React, { createContext, useState, useEffect, ReactNode } from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, getCartItemsCount, getCartTotal } from './cart.utils';

interface IProps {
	children: ReactNode;
	// any other props that come into the component
}

interface Item {
	id?: number;
}

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: (item: object) => {},
	removeItem: (item: object) => {},
	clearItemFromCart: (item: object) => {},
	cartItemsCount: 0,
	cartTotal: 0
});

export const CartProvider = ({ children }: IProps) => {
	const [ hidden, setHidden ] = useState(true);
	const [ cartItems, setCartItems ] = useState([]);
	const [ cartItemsCount, setCartItemsCount ] = useState(0);
	const [ cartTotal, setCartTotal ] = useState(0);

	const toggleHidden = () => setHidden(!hidden);

	const addItem = (item: Item) => setCartItems(addItemToCart(cartItems, item));
	const removeItem = (item: Item) => setCartItems(removeItemFromCart(cartItems, item));

	const clearItemFromCart = (item: Item) => setCartItems(filterItemFromCart(cartItems, item));

	useEffect(
		() => {
			setCartItemsCount(getCartItemsCount(cartItems));
			setCartTotal(getCartTotal(cartItems));
		},
		[ cartItems ]
	);

	return (
		<CartContext.Provider
			value={{
				hidden,
				toggleHidden,
				cartItems,
				addItem,
				removeItem,
				clearItemFromCart,
				cartItemsCount,
				cartTotal
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
