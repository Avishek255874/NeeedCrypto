import React from "react";
import './SideBar.css'
import { NavLink } from "react-router-dom";

const MenuItem = ({ menuName, fontAws,menuTextClass ,url}) => {
  return (
    <div className="mb-4 highlightMenuItemParent">
    <a href={url}>
      <i className={`${fontAws} highlightMenuItem`} />
      <span className={`FontSize  ms-3 highlightMenuItem ${menuTextClass}`} >
        {menuName}
      </span>
      </a>
    </div>
  );
};
export default MenuItem;
