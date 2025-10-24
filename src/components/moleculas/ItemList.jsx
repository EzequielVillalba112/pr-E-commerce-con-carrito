import styled from "styled-components";

export const ItemList = ({ item, handleClick, selectedCategory }) => {
  return (
    <ItemListContainer
      className={selectedCategory === item ? "selected" : ""}
      onClick={handleClick}
    >
      <label>{item}</label>
    </ItemListContainer>
  );
};

const ItemListContainer = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  height: 40px;
  
  &.selected {
    background-color: #f1f1f1;
    padding-left: 15px;
    transition: all 0.3s ease-in-out;
    border-radius: 16px;
  }

  label {
    width: 100%;
    height: 100%;
    color: #333333;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 8px;
    text-transform: capitalize;
    padding-left: 10px;
 
    &:hover {
      background-color: #f1f1f1;
      border-radius: 16px;
      transition: all 0.3s ease-in-out;
    }
  }
`;
