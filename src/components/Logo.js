import React from "react";
import { plogo, title } from "../styles/style";

const Logo = () => {
  const logoImage = {
    url: "./logo192.png",
  };

  return (
    <div>
      {/* <img src="./logo192.png" widht="100" alt="logo" /> */}
      <img style={plogo} src={logoImage.url} width="100" alt="logo" />
      <p style={title}>MyLOGO</p>
    </div>
  );
};

export default Logo;
