import styled from 'styled-components';

const ButtonStyled = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = ({ text, type, onClick }) => {
  return onClick ? (
    <ButtonStyled type={type} onClick={onClick}>
      {text}
    </ButtonStyled>
  ) : (
    <ButtonStyled type={type}>{text}</ButtonStyled>
  );
};
