import React from 'react';

import CollectionContext from '../../contexts/collections/collections.context';

import CollectionItem from '../../components/collection-item';


import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  return (
    <CollectionContext.Consumer>
      {
        collections => {
          const collection = collections[match.params.colleectionId];
          const { title, items } = collection;
          return (
            <div className='collection-page'>
              <h2 className='title'>{title}</h2>
              <div className='items'>
                {items.map(item => (
                  <CollectionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          )
          
        }
      }
    </CollectionContext.Consumer>
  );
};

export default CollectionPage;
