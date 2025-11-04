import styled from "styled-components";
import { Btn } from "../atomos/Btn";

export const BtnsCard = ({ addToCart }) => {
  return (
    <BtnsCardContainer>
      <Btn
        text="Add to Cart"
        bgcolor="#e2e2e2"
        textcolor="#1f1f1f"
        function={addToCart}
      />
      <Btn text="Buy now" bgcolor="#252525" textcolor="#ffffff" />
    </BtnsCardContainer>
  );
};

const BtnsCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

   @media (max-width: 1003px) {
    flex-direction: column;
    gap: 8px;
  }
`;
