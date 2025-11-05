import styled from "styled-components";
import { NavBar } from "./components/organismos/NavBar";
import { AllProducts } from "./page/AllProducts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProductCart } from "./store/ProductCart";
import { useState } from "react";
import { CartPageTemplate } from "./components/template/CartPageTemplate";
import { Pay } from "./store/Pay";

function App() {
  const { cart, updateLot, removeFromCart } = ProductCart();
  const [openCart, setOpenCart] = useState(false);
  const { idPreference, fetchPay, clearPreference } = Pay();
  return (
    <ContainerApp>
      <NavBar
        cart={cart.length}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      {openCart ? (
        <CartPageTemplate
          cart={cart}
          setOpenCart={setOpenCart}
          updateLot={updateLot}
          removeFromCart={removeFromCart}
          idPreference={idPreference}
          fetchPay={fetchPay}
          clearPreference={clearPreference}
        />
      ) : (
        <AllProducts />
      )}
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
