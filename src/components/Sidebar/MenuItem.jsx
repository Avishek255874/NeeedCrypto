import React from "react";
import './SideBar.css'

const MenuItem = ({ menuName, fontAws,menuTextClass }) => {
  return (
    <div className="mb-4 highlightMenuItemParent">
      <i className={`${fontAws} highlightMenuItem`} />
      <span className={`FontSize  ms-3 highlightMenuItem ${menuTextClass}`} >
        {menuName}
      </span>
    </div>
  );
};
export default MenuItem;
