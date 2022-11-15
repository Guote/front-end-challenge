import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: 2rem;
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const Loading = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  width: 4rem;
  height: 4rem;
  margin-top: 3rem;
  
  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 6px solid #22223D;
    border-color: #22223D transparent #22223D transparent;
    animation: ${spinAnimation} 1.2s linear infinite;
  }
`;
