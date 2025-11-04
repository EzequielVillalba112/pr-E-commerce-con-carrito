import styled from "styled-components";
import { ImgContainer } from "../atomos/ImgContainer";
import { Btn } from "../atomos/Btn";

export const ItemListCart = ({ item, updateLot, removeFromCart }) => {
  return (
    <ItemListCartContainer>
      <ItemDetailContainer>
        <ImgContainer src={item.image} alt={item.title} />
        <ItemDetails>
          <h4>{item.title}</h4>
          <ContainerPrice>
            <p>Price (unit): ${item.price}</p>
            <p>Total: ${item.price * item.lot}</p>
          </ContainerPrice>

          <QuantityControl>
            <Btn
              text="-"
              bgcolor="#e0e0e0"
              textcolor="#333"
              function={() => updateLot(item.id, "decrement")}
            />
            <span style={{ margin: "0 10px" }}>{item.lot}</span>
            <Btn
              text="+"
              bgcolor="#e0e0e0"
              textcolor="#333"
              function={() => updateLot(item.id, "increment")}
            />
          </QuantityControl>
        </ItemDetails>
      </ItemDetailContainer>
      <Btn
        text="Remove"
        bgcolor="#ff4d4d"
        textcolor="#fff"
        function={() => removeFromCart(item.id)}
      />
    </ItemListCartContainer>
  );
};

const ItemListCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  width: 100%;
  border-bottom: 1px solid #d6d6d6d1;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  @media (max-width: 510px) {
    flex-direction: column;

    button{
      width:100%;
      margin-top: 10px;
    }
  }
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #5a5959;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    color: #555;
  }
`;

const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ItemDetailContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
