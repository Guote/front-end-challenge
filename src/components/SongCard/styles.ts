import { Text } from '$/components/Text';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-width: 10rem;
  margin: 2rem 0rem;
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
  display: flex;
  align-items: center;
  margin-top: -0.5rem;
`;

export const Duration = styled(Text)`
  margin: 0 0.75rem;
  color: #484a69;
`;

export const Description = styled(Text)`
  margin-top: 0.25em;
  margin-bottom: 0.25em;
`;

