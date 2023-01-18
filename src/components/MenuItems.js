import React from "react";
import { useState, useRef, useEffect } from "react";
import DropDown from "./DropDown";

export default function MenuItems({ items, depthlevel }) {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <div>
      <li
        className="menu-items"
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menus"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {items.title}{" "}
              {depthlevel > 0 ? (
                <span> & raquo; </span>
              ) : (
                <span className="arrow" />
              )}
            </button>
            <DropDown
              depthlevel={depthlevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          </>
        ) : (
          <a href="/#">{items.title}</a>
        )}
      </li>
    </div>
  );
}
