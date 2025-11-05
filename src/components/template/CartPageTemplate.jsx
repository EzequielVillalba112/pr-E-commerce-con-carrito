import styled from "styled-components";
import { ItemListCart } from "../moleculas/ItemListCart";
import { Btn } from "../atomos/Btn";
//////////////////
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";

export const CartPageTemplate = ({
  cart,
  setOpenCart,
  updateLot,
  removeFromCart,
  idPreference,
  fetchPay,
  clearPreference,
}) => {
  return (
    <CartContainer>
      <CartHeader>
        <Title>Shopping Cart</Title>
        <Subtitle>{cart.length} items</Subtitle>
      </CartHeader>
      <ListCartContainer>
        {cart.map((product, i) => (
          <li key={i}>
            <ItemListCart
              item={product}
              updateLot={updateLot}
              removeFromCart={removeFromCart}
            />
          </li>
        ))}
      </ListCartContainer>
      <TotalContainer>
        <h3>
          Total: $
          {Math.round(
            cart.reduce((acc, item) => acc + item.price * item.lot, 0) * 100
          ) / 100}
        </h3>
        <Btn
          text="Checkout"
          bgcolor="#222222"
          textcolor="#fff"
          function={() => fetchPay(cart)}
        />
      </TotalContainer>

      <BackContainer>
        <Btn
          text="<- Back to Shopping"
          bgcolor="#e0e0e0"
          textcolor="#333"
          function={() => setOpenCart(false)}
        />
      </BackContainer>
      {idPreference && (
        <ContainerPay>
          <Pay>
            <button className="close" onClick={clearPreference}>X</button>
            <Title>Pay with</Title>
            <Wallet initialization={{ preferenceId: idPreference }} />
          </Pay>
        </ContainerPay>
      )}
    </CartContainer>
  );
};

const CartContainer = styled.section`
  width: 90%;
  margin-top: 90px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fafafa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: #4d4d4d;
  font-weight: 700;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #666666;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const ListCartContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 24px;
    color: #333333;
    font-weight: 700;
  }

  @media (max-width: 510px) {
    flex-direction: column;

    button {
      width: 100%;
      margin-top: 10px;
    }
  }
`;

const BackContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: start;
`;

const ContainerPay = styled.div`
  position: absolute;
  width: 100%;
  height: 100dvh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.89);
`;

const Pay = styled.div`
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffff;
  border-radius: 8px;
  border: 1px solid #d6d6d6;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  .close{
    position: absolute;
    height: 40px;
    width: 40px;
    border: none;
    background-color: #b11c1c;
    color: #d6d6d6;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 50%;
    top: -15px;
    right: -15px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
      background-color: #9e1a1a;
    }
  }
`;
