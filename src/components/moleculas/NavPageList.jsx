import styled from "styled-components";
import { Btn } from "../atomos/Btn";

export const NavPageList = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <ContainerNavPageList style={{ marginTop: "1rem" }}>
      {currentPage > 1 && (
        <Btn
          bgcolor={"#e0e0e0"}
          textcolor={"#333333"}
          function={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          text={"<"}
        />
      )}

      {Array.from({ length: totalPages }).map((_, i) => (
        <>
          <Btn
            text={i + 1}
            bgcolor={currentPage === i + 1 ? "#1976d2" : "#e0e0e0"}
            textcolor={currentPage === i + 1 ? "#ffffff" : "#333333"}
            key={i}
            function={() => setCurrentPage(i + 1)}
            disabled={currentPage === i + 1}
          />
        </>
      ))}

      {currentPage < totalPages && (
        <Btn
          bgcolor={"#e0e0e0"}
          textcolor={"#333333"}
          function={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          text={">"}
        />
      )}
    </ContainerNavPageList>
  );
};

const ContainerNavPageList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;

  button {
    padding: 8px 12px;
  }
`;
