import styled from 'styled-components';

export const LabelContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.lighterblue};
  color: ${({ theme }) => theme.color.grayscale900};
  padding: 0 0.25rem 0.5rem;
  border-radius: 3rem;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    position: absolute;
    left: 10rem;
    top: 6rem;
  }
`;
