import React, { useState } from "react";
import QRCode from "qrcode.react";
import styled from "styled-components";

const generatePayload = require("promptpay-qr");

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Container = styled.div`
  height: 100vh;
  padding: 4em;
  background: papayawhip;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const QRWrapper = styled.div`
  margin: auto;
  padding: 10px;
`;

const InputWrapper = styled.div`
  margin: auto;
  width: 200px;
  padding: 10px;
`;

function Promptpay() {
  const [phoneNumber, setPhoneNumber] = useState("3200200608862");
  const [amount, setAmount] = useState(1.0);
  const [qrCode, setqrCode] = useState("อัครเดช");

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  function handleAmount(e) {
    if (e.target.value > 0) {
      setAmount(parseFloat(e.target.value));
    } else setAmount(0);
  }

  function handleQR() {
    setqrCode(generatePayload(phoneNumber, { amount }));
  }

  return (
    <Container>
      <Title>อัครเดช PromptPay</Title>
      <FlexContainer>
        <QRWrapper>
          <QRCode value={qrCode} />
        </QRWrapper>
        <InputWrapper>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumber} />
          <input type="number" value={amount} onChange={handleAmount} />
          <button onClick={handleQR}>Generate Promptpay QR</button>
        </InputWrapper>
      </FlexContainer>
    </Container>
  );
}

export default Promptpay;
