import styled from "styled-components";
import { BtnsCard } from "./BtnsCard";

export const ItemListProduct = ({
  product,
  addToCart,
  fetchPay,
}) => {
  const addProdutToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      lot: 1,
    });
  };

  const payNow = () => {
    fetchPay([
      {
        id: product.id,
        title: product.title,
        price: product.price,
        lot: 1,
      },
    ]);
  };

  return (
    <ItemListProductContainer key={product.id}>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <RatePriceContainer>
        <Rate>
          ⭐{product.rating.rate} ({product.rating.count} Review)
        </Rate>
        <Price>${product.price.toFixed(2)}</Price>
      </RatePriceContainer>
      <BtnsCard addToCart={addProdutToCart} fetchPay={payNow} />
      
    </ItemListProductContainer>
  );
};

const ItemListProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fafafa;
  min-height: 400px;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 12px;
    border-radius: 4px;
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #333333;
  }
`;

const RatePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Rate = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #555555;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #0f0f0f;
`;
const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: #4d4d4d;
  font-weight: 700;
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

  .close {
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

    &:hover {
      background-color: #9e1a1a;
    }
  }
`;
