import styled from "styled-components";
import { ItemList } from "../moleculas/ItemList";

export const CategoryProduct = () => {
  const categories = [
    { id: 1, name: "electronics", label: "Electrónica", icon: "💻" },
    { id: 2, name: "jewelery", label: "Joyería", icon: "💍" },
    { id: 3, name: "men's clothing", label: "Ropa de Hombre", icon: "👔" },
    { id: 4, name: "women's clothing", label: "Ropa de Mujer", icon: "👗" },
  ];

  return (
    <CategoryProductContainer>
      <CategoryProductTitle>Categorías</CategoryProductTitle>
      <CategoryList>
        {categories.map((category) => (
          <ItemList key={category.id} item={category} />
        ))}
      </CategoryList>
    </CategoryProductContainer>
  );
};

const CategoryProductContainer = styled.div`
  min-width: 300px;
  height: max-content;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const CategoryProductTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const CategoryList = styled.ul`
  list-style: none;
  margin-top: 20px;
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
