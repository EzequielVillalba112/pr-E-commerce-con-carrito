import styled from "styled-components";
import { ItemList } from "../moleculas/ItemList";
import { AllProduct } from "../../store/AllProducts";
import { useEffect, useState } from "react";
import { PiArrowDownBold } from "react-icons/pi";

export const CategoryProduct = ({
  categories,
  setCategoriesState,
  categoriesState,
  setSearchText,
  isMobile,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryMobile, setSelectedCategoryMobile] = useState("");
  const { setProductsByCategory } = AllProduct();

  const handleClick = (category) => {
    setProductsByCategory(category);
    setSelectedCategory(category);
    setCategoriesState(true);
    setSearchText("");
    category === "" && setCategoriesState(false);
  };

  return (
    <CategoryProductContainer>
      {isMobile ? (
        <CategorieResMobile
          onClick={() => {
            setSelectedCategoryMobile(!selectedCategoryMobile);
          }}
        >
          <CategoryProductTitle>Categories</CategoryProductTitle>
          <PiArrowDownBold size="1.5rem" />
          {selectedCategoryMobile && (
            <CategoryListMobile>
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
            </CategoryListMobile>
          )}
        </CategorieResMobile>
      ) : (
        <>
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
        </>
      )}
    </CategoryProductContainer>
  );
};

const CategoryProductContainer = styled.div`
  min-width: 300px;
  height: max-content;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;

  @media (max-width: 860px) {
    padding: 16px;
  }
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

const CategorieResMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const CategoryListMobile = styled.ul`
  position: absolute;
  width: -webkit-fill-available;
  background-color: #ffffff;
  list-style: none;
  margin-top: 360px;
  margin-right: 60px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  gap: 10px;
`;
