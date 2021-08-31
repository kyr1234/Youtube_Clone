import React from "react";
import "./SidebarModal.css";

function Sidebar({ selected, title, Icon }) {
  return (
    <div className={`Sidebar ${selected && "selected"}`}>
      <Icon />
      <h5 className="title">{title}</h5>
    </div>
  );
}

export default Sidebar;
