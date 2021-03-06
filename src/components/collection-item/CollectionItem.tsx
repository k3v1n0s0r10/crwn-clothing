import React from "react";

import "./CollectionItem.scss";

interface Props {
  imageUrl: string;
  name: string;
  price: string;
}

const CollectionItem: React.FC<Props> = ({ imageUrl, name, price }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
