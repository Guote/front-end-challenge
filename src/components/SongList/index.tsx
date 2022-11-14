import React from 'react';
import { useSelector } from '$/store';
import { getFilteredSongs } from '$/store/player';
import { SongCard } from '../SongCard';
import { Text } from '../Text';
import { Container } from './styles';

export const SongList = () => {
  const filteredSongs = useSelector(getFilteredSongs)

  return (
    <Container>
      <Text tag="h2" variant="title2">
        Featured songs
      </Text>
      {filteredSongs.map((song) => (
        <SongCard song={song} key={song.id} />
      ))}
    </Container>
  );
};
