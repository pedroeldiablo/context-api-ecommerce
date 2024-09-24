import React, { memo } from 'react';

import './cart-item.styles.scss';

export interface Item {
  item: {
    imageUrl: string;
    price: number;
    name: string;
    quantity?: number;
    id?: number;
  };
}

export const CartItem = memo(
  ({ item: { imageUrl, price, name, quantity } }: Item) => {
    return (
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
  }
);
