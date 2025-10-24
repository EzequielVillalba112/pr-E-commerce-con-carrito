import styled from "styled-components";
import { ItemListProduct } from "../moleculas/ItemListProduct";
import { useEffect, useState } from "react";
import { NavPageList } from "../moleculas/NavPageList";

export const ListProduct = ({ products, categoriesState }) => {
  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoriesState === true]);

  // Número de productos por página
  const productsPerPage = 6;

  // Calcular los índices
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  // Número total de páginas
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <Container>
      <ListProductContainer>
        {currentProducts.map((product) => (
          <ItemListProduct key={product.id} product={product} />
        ))}
      </ListProductContainer>
      {/* Botones de paginación */}
      <NavPageList
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListProductContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 16px;

  /* Desktop: 3 columnas */
  grid-template-columns: repeat(3, 1fr);

  /* Tablet: 2 columnas */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Móvil: 1 columna */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
