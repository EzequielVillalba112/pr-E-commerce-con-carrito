import styled from "styled-components";

export const Input = ({ type, placeholder, icono: Icono, value, onChange }) => {
  return (
    <InputContainer>
      {Icono && <Icono />}
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  max-width: 250px;
  input {
    width: 100%;
    padding: 8px 12px 8px 32px;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    background-color: #fafafa;
    font-size: 16px;
    color: #1d1d1d;
  }

  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #1d1d1d;
  }
`;
