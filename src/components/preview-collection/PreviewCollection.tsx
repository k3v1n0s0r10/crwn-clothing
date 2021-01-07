import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/CollectionItem";

import "./PreviewCollection.scss";

const CollectionPreview: React.FC<any> = ({
  title,
  items,
  history,
  match,
  routeName,
}) => {
  return (
    <div
      className="collection-preview"
      onClick={() => history.push(`${match.url}/${routeName}`)}
    >
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item: any, idx: number) => idx < 4)
          .map(({ id, ...otherProps }: any) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
