import React, { memo, useContext } from 'react';
import { Item } from '../cart-item/cart-item.component';

import { CustomButton } from '../custom-button/custom-button.component';
import { CartContext } from '../../providers/cart/cart.provider';

import './collection-item.styles.scss';

export const CollectionItem = memo(({ item }: Item) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
});
