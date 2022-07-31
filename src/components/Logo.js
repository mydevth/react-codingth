import React from "react";
import { plogo, title } from "../styles/style";
import useHover from "../hooks/UseHover";

const Logo = () => {
  const [hover, attrs] = useHover();

  const logoImage = {
    url: "./logo192.png",
  };

  return (
    <div>
      {/* <img src="./logo192.png" widht="100" alt="logo" /> */}
      {hover ? <h3>Hello Logo</h3> : null}
      <img
        /* custom hook
        onMouseOver={attrs.onMouseOver}
        onMouseOut={attrs.onMouseOut} */
        {...attrs}
        style={plogo}
        src={logoImage.url}
        width="100"
        alt="logo"
      />
      <p style={title}>MyLOGO</p>
    </div>
  );
};

export default Logo;
