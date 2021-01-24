import React from "react";

import MenuItem from "../menu-item/MenuItem";

import { sectionsData } from "../../data/directory";

import "./Directory.scss";

const Directory: React.FC = () => {
  return (
    <div className="directory-menu">
      {sectionsData.map(({ id, ...rest }) => (
        <MenuItem key={id} id={id} {...rest} />
      ))}
    </div>
  );
};

export default Directory;
