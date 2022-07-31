import React from "react";

const Menu2 = () => {
  const [hover, setHover] = React.useState(false);

  const mouseOver = () => {
    setHover(true);
  };

  const mouseOut = () => {
    setHover(false);
  };

  return (
    <div>
      <h1>Menu2</h1>
      {hover ? <h3>เมนูหลัก2</h3> : null}
      <img
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        src="./logo192.png"
        alt="logo a"
      />
    </div>
  );
};

export default Menu2;
