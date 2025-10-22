import styled from "styled-components";

export const ItemList = ({ item }) => {
  return (
    <ItemListContainer>
      <label>{item.label}</label>
    </ItemListContainer>
  );
};

const ItemListContainer = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  height: 40px;

  label {
    width: 100%;
    height: 100%;
    color: #333333;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 8px;

    &:hover {
      background-color: #f1f1f1;
      padding-left: 10px;
      transition: all 0.3s ease-in-out;
    }
  }
`;
