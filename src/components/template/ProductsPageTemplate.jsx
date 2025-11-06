import styled from "styled-components";
import BgHero from "../../assets/bg-shop.jpg";
import { ImgContainer } from "../atomos/ImgContainer";
import { CategoryProduct } from "../organismos/CategoryProduct";
import { ListProduct } from "../organismos/ListProduct";
import { useState } from "react";
import { Input } from "../moleculas/Input";
import { CiSearch } from "react-icons/ci";
import { Wallet } from "@mercadopago/sdk-react";

export const ProductsPageTemplate = ({
  productsAll,
  productsCategory = [],
  categories,
  addToCart,
  searchText,
  setSearchText,
  resultSearch,
  isMobile,
  fetchPay,
  idPreference,
  clearPreference,
  productSelect
}) => {
  const [categoriesState, setCategoriesState] = useState(false);

  return (
    <ProductsPageTemplateContainer>
      <Hero>
        <ImgContainer src={BgHero} alt="Background Hero" />
        <div className="glass"></div>
        <h2>Welcome to FakeMart</h2>
      </Hero>

      <ProductsContainer>
        <SearchCategory>
          <SearchContainer>
            <Input
              type={"text"}
              placeholder={"Search Products..."}
              icono={CiSearch}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <MessageNoProducts>
              {resultSearch.length === 0 &&
                searchText !== "" &&
                "No products found"}
            </MessageNoProducts>
          </SearchContainer>
          <CategoryProduct
            categories={categories}
            setCategoriesState={setCategoriesState}
            categoriesState={categoriesState}
            setSearchText={setSearchText}
            isMobile={isMobile}
          />
        </SearchCategory>
        <ListProduct
          products={
            productsCategory.length > 0
              ? productsCategory
              : resultSearch.length > 0
              ? resultSearch
              : productsAll
          }
          categoriesState={categoriesState}
          addToCart={addToCart}
          fetchPay={fetchPay}
        />
      </ProductsContainer>

      {idPreference && (
        <ContainerPay>
          <Pay>
            <button className="close" onClick={clearPreference}>
              X
            </button>
            <Title>Buy</Title>
            <Subtitle> {productSelect[0].title}</Subtitle>
            <Subtitle>Total: ${productSelect[0].price}</Subtitle>
            <Wallet initialization={{ preferenceId: idPreference }} />
          </Pay>
        </ContainerPay>
      )}
    </ProductsPageTemplateContainer>
  );
};

const ProductsPageTemplateContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .glass {
    position: absolute;
    width: 100%;
    height: 500px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    z-index: 1;
  }

  h2 {
    position: absolute;
    color: #e4e4e4;
    font-size: 6.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    z-index: 2;
  }

  @media (max-width: 590px) {
    h2 {
      font-size: 5rem;
    }
  }

  @media (max-width: 450px) {
    & {
      height: 300px;
    }

    .glass {
      height: 300px;
    }
    h2 {
      margin-top: 1rem;
      font-size: 3rem;
    }
  }
`;

const ProductsContainer = styled.div`
  width: 90%;
  margin-top: -4rem;
  margin-bottom: 2rem;
  z-index: 3;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: start;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const SearchCategory = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 860px) {
    width: 100%;
    gap: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

const MessageNoProducts = styled.p`
  font-size: 1rem;
  color: #ac2121;
`;

const ContainerPay = styled.div`
  position: fixed;
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
  justify-content: center;
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
  text-align: center;
`;
