import styled from "styled-components";
import { ItemList } from "../moleculas/ItemList";
import { AllProduct } from "../../store/AllProducts";
import { useState } from "react";

export const CategoryProduct = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { setProductsByCategory } = AllProduct();

  const handleClick = (category) => {
    setProductsByCategory(category);
    setSelectedCategory(category);
  };

  return (
    <CategoryProductContainer>
      <CategoryProductTitle>Categories</CategoryProductTitle>
      <CategoryList>
        {categories.map((category, i) => (
          <ItemList
            key={i}
            item={category}
            handleClick={() => handleClick(category)}
            selectedCategory={selectedCategory}
          />
        ))}
        <ItemList
          key={"all"}
          item={"all"}
          handleClick={() => handleClick("")}
        />
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
