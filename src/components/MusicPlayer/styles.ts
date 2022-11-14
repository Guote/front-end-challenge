import { Text } from '$/components/Text';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const PlayerContainer = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grayscale900};
  border-radius: 16px 16px 0px 0px;
  padding: 16px 24px;
  z-index: 1;
`;

export const SongInformation = styled.div`
  display: flex;
  justify-content: start;
  color: ${({ theme }) => theme.color.white};
`;

export const Cover = styled.img`
  height: 4rem;
  width: 4rem;
  object-fit: cover;
  border-radius: 0.75rem;
`;

export const PlayerControls = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: start;
  align-items: center;

  ${from['tabletLandscape']} {
    justify-content: center;
  }

  & > * {
    &:not(:first-child) {
      margin-left: 0.75rem;
    }
    &:not(:last-child) {
      margin-right: 0.75rem;
    }
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const PlayButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
`;
export const Icon = styled.span`
  color: ${({ theme }) => theme.color.white};
  scale: 150%
`;
export const PlayIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.grayscale900};
`;
export const SongDetails = styled.div`
  padding-left: 1rem;
  margin: auto 0;
`;

export const ProgressTime = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 0.5rem;
  width: 100%;
  min-width: 300px;
  max-width: 40rem;
`;

export const ProgressTimeText = styled(Text)`
  color: ${({ theme }) => theme.color.white};
  width: 3rem;
  padding: 0 0.25rem 0.5rem;
  &:first-child {
    text-align: right;
  }
  &:last-child {
    text-align: left;
  }
`;
