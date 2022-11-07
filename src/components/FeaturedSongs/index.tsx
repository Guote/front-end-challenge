import React from 'react';

import { SongCard } from '../SongCard';
import { Text } from '../Text';
import { Container } from './styles';

import { songs } from './mockSongs';

export const FeaturedSongs = () => {
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
