import styled from "styled-components";
import ShoppingBasket from "../../assets/icon-ec.svg";
import { Input } from "../moleculas/Input";
import { CiSearch } from "react-icons/ci";
import { ImgContainer } from "../atomos/ImgContainer";

export const NavBar = ({ cartCount = 1 }) => {
  return (
    <NavBarContainer>
      <div className="logo">
        <h1>FakeMart</h1>
      </div>

      <Input
        type={"text"}
        placeholder={"Buscar Productos..."}
        icono={CiSearch}
      />
      <CartButton>
        <CartCount>{cartCount}</CartCount>
        <ImgContainer src={ShoppingBasket} alt="Shopping Cart" />
      </CartButton>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  width: 90%;
  height: 80px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(43, 43, 43, 0.932);
  padding: 20px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 10;

  .logo h1 {
    color: #ffff;
    font-size: 40px;
  }
`;

const CartButton = styled.button`
  position: relative;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  padding: 10px;
`;

const CartCount = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b81e1e;
  color: #fff;
  border-radius: 50%;
  font-size: 12px;
`;
