import React from 'react';

import './cart-item.styles.scss';

export interface Item {
	item: {
		imageUrl: string;
		price: number;
		name: string;
		quantity: number;
	};
}

export const CartItem = ({ item: { imageUrl, price, name, quantity } }: Item) => (
	<div className="cart-item">
		<img src={imageUrl} alt="item" />
		<div className="item-details">
			<span className="name">{name}</span>
			<span className="price">
				{quantity} x ${price}
			</span>
		</div>
	</div>
);
