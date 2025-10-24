import styled from "styled-components";

export const Btn = ({
  text,
  bgcolor,
  textcolor,
  function: onClick,
  disabled = false,
}) => {
  return (
    <BtnContainer
      $bgcolor={bgcolor}
      $textcolor={textcolor}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </BtnContainer>
  );
};

const BtnContainer = styled.button`
  padding: 12px 24px;
  background-color: ${(props) => props.$bgcolor || "#f7f7f7"};
  color: ${(props) => props.$textcolor || "#333"};
  border: none;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
