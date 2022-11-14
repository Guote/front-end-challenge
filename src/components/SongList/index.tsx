import React from 'react';
import { useSelector } from '$/store';
import { getSongs } from '$/store/player';
import { SongCard } from '../SongCard';
import { Text } from '../Text';
import { Container } from './styles';

export const SongList = () => {
  const songs = useSelector(getSongs)

  return (
    <Container>
      <Text tag="h2" variant="title2">
        Featured songs
      </Text>
      {songs.map((song) => (
        <SongCard song={song} key={song.id} />
      ))}
    </Container>
  );
};
