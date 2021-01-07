import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/PreviewCollection";

const ShopPage = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, ...otherParams }) => (
        <CollectionPreview key={id} {...otherParams} />
      ))}
    </div>
  );
};

export default ShopPage;
