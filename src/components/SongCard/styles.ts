import { Text } from '$/components/Text';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-width: 10rem;
  margin-top: 2rem;
  margin-bottom: -0.5rem;
`;

export const Thumbnail = styled.img`
  width: 8.75rem;
  height: 8.75rem;
  object-fit: cover;
  border-radius: 0.75rem;
`;

export const SongBody = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`;

export const SongDetails = styled.div`
  margin-top:0.5rem;
  max-height: 2.8rem;
  display: flex;
  align-items: center;
`;

export const Duration = styled(Text)`
  padding: 0 1rem 0.5rem 1rem;
  color: #484a69;
`;

export const Description = styled(Text)`
  margin-top: 0.25em;
  margin-bottom: 0.25em;
`;

export const PlayButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  background-color: ${({ theme }) => theme.color.grayscale900};
  border-radius: 50%;
  cursor: pointer;
    &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled.span`
  color: white;
`;
