import styled from "styled-components";
import { NavBar } from "./components/organismos/NavBar";
import { AllProducts } from "./page/AllProducts";

function App() {
  return (
    <ContainerApp>
      <NavBar />
      <AllProducts />
    </ContainerApp>
  );
}

export default App;

const ContainerApp = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`