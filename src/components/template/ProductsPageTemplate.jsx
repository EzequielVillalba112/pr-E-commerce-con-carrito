import styled from "styled-components"
import BgHero from "../../assets/bg-shop.jpg"
import { ImgContainer } from "../atomos/ImgContainer"
import { CategoryProduct } from "../organismos/CategoryProduct"
import { ListProduct } from "../organismos/ListProduct"

export const ProductsPageTemplate = ({ products, categories }) => {
  return (
    <ProductsPageTemplateContainer>
        <Hero>
            <ImgContainer src={BgHero} alt="Background Hero" />
            <div className="glass"></div>
            <h2>Welcome to FakeMart</h2>
        </Hero>

        <ProductsContainer>
            <CategoryProduct categories={categories} />
            <ListProduct products={products} />
        </ProductsContainer>
        
    </ProductsPageTemplateContainer>
  )
}

const ProductsPageTemplateContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Hero = styled.div`
    width: 100%;
    height: 500px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .glass{
        position: absolute;
        width: 100%;
        height: 500px;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(4px);
        z-index: 1;
    }

    h2{
        position: absolute;
        color: #e4e4e4;
        font-size: 6.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        z-index: 2;
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
`