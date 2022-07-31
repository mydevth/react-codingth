import React from "react";
import useHover from "../hooks/UseHover";

const Menu = () => {
  const [hover, attrs] = useHover();

  return (
    <div>
      <h1>Menu</h1>
      {hover ? <h3>เมนูหลัก</h3> : null}
      <img
        /* ใช้ custom hook
        onMouseOver={attrs.onMouseOver}
        onMouseOut={attrs.onMouseOut} */
        {...attrs}
        src="./logo192.png"
        alt="logo a"
      />
    </div>
  );
};

export default Menu;
