import React from 'react'
import CollectionPreview from '../../components/preview-collection/collection-preview.component';

import SHOP_DATA from "./shop.data";

const ShopPage = () => {

  return (
    <div>
      {
        SHOP_DATA.map( ( { id, ...otherParams } ) => (
          <CollectionPreview key={id} {...otherParams} />
        ))
      }
    </div>
  )
}

export default ShopPage
 