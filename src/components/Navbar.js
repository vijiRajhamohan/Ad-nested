import React from "react";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

export default function Navbar() {
  return (
    <div>
      <ul className="menus">
        {
          menuItems.map((menu, index) => {
            const depthlevel = 0;
            return <MenuItems items={menu} key={index} depthlevel={depthlevel} />;
          })
        }
      </ul>
    </div>
  );
}
