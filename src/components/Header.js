import React from "react";
import Logo from "./Logo";
import Title from "../styles/title/Title";
import { Button } from "../styles/button/Button";

const Header = () => {
  let companyName = "Chonburi.Biz";
  const companyAddress = <p>Chonburi</p>;
  let num = 10;
  const showMessage = () => {
    return companyName + "OK";
  };
  const isLogin = false;

  const showMe = () => {
    alert("Hello React");
  };

  const products = [
    { id: 1, name: "Coke", price: 8 },
    { id: 2, name: "Pepsi", price: 9 },
  ];

  return (
    <>
      {/* comment   */}
      <Title>ทดสอบ style components</Title>
      <h1>บริษัท {companyName} </h1>
      {companyAddress}
      {num + 100} <br />
      {showMessage()}
      {isLogin === true && (
        <>
          <p> ยินดีต้อนรับ 1</p>
          <p> ยินดีต้อนรับ 2</p>
        </>
      )}
      {
        <>
          <br />
          {isLogin ? <Logo /> : "ไม่มีสิทธิ์ดู Logo"}
          <hr />
        </>
      }
      <br />
      {/* <button onClick={showMe}> Click Me!</button> */}
      <Button primary onClick={showMe}>
        Click Me!
      </Button>
      <Button onClick={showMe}>Click Me!</Button>
      <br />
      <ul>
        {products.map((product, index) => {
          return (
            <li key={product.id}>
              {index + 1} {product.name} {product.price}{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Header;
