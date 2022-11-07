import styled from 'styled-components';

export const LabelContainer = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.lightblue};
  color: ${({ theme }) => theme.color.grayscale900};
  padding: 4px 8px;
  border-radius: 47px;
  text-transform: capitalize;
`;
