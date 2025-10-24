import styled from "styled-components";
import { BtnsCard } from "./BtnsCard";

export const ItemListProduct = ({ product }) => {
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
      <BtnsCard />
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
