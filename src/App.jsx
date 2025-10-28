import styled from "styled-components";
import { NavBar } from "./components/organismos/NavBar";
import { AllProducts } from "./page/AllProducts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProductCart } from "./store/ProductCart";

function App() {
  const { cart } = ProductCart();

  return (
    <ContainerApp>
      <NavBar cart={cart} />
      <AllProducts />
      <ReactQueryDevtools initialIsOpen={false} />
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
