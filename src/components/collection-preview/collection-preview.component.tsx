import React from 'react';

import { CollectionItem } from '../collection-item/collection-item.component';

import { Item } from '../cart-item/cart-item.component';

import './collection-preview.styles.scss';

interface Collection {
	title: string;
	items: Array<Item['item']>;
}

export const CollectionPreview = ({ title, items }: Collection) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (item ? <CollectionItem key={item.id} item={item} /> : null))}
		</div>
	</div>
);
