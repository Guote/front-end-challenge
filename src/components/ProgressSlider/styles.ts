import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  justify-content: start;
  align-items: center;
  border: none;
  border-radius: 4px;
  height: 4px;
  width: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.lightblue} 0%,
    ${({ theme }) => theme.color.lightblue} var(--progress),
    ${({ theme }) => theme.color.grayscale500} var(--progress),
    ${({ theme }) => theme.color.grayscale500} 100%
  );
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    width: 10px;
    height: 10px;
    -webkit-appearance: none;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.white};
  }

  /** FF*/
  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 5px;
  }

  /* IE*/
  &::-ms-thumb {
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 5px;
    margin-top: 0px;
  }
`;
