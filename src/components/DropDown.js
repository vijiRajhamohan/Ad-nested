import React from 'react'
import MenuItems from './MenuItems'

export default function DropDown({submenus,dropdown,depthlevel}) {
  depthlevel = depthlevel+1;
  const dropdownclass = depthlevel > 1 ? "dropdown-submenu" : "";
  return (
    <div>
      <ul className={`dropdown ${dropdownclass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => {
          const depthlevel = 0;
          return <MenuItems items={submenu} key={index} depthlevel={depthlevel} />;
        })}
      </ul>
    </div>
  )
}
