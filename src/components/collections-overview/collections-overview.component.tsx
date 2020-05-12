import React, { useContext } from 'react';

import { CollectionPreview } from '../collection-preview/collection-preview.component';
import { CollectionsContext } from '../../contexts/collections/collections.context';

import './collections-overview.styles.scss';

import { Item } from '../cart-item/cart-item.component';

interface Collection {
	[key: string]: Item['item'];
}

export const CollectionsOverview = () => {
	const collectionsMap = useContext(CollectionsContext);
	const collections = Object.keys(collectionsMap).map((key) => collectionsMap[key]);

	console.log({ collections });

	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};
