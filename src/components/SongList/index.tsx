import React from 'react';
import { useSelector } from '$/store';
import { getError, getFilteredSongs } from '$/store/player';
import * as R from 'ramda';
import { SongCard } from '../SongCard';
import { Text } from '../Text';
import { Container, Loading } from './styles';

export const SongList = () => {
  const filteredSongs = useSelector(getFilteredSongs);
  const error = useSelector(getError);
  const isSongsLoaded = R.not(R.isEmpty(filteredSongs));

  if (error)
    return (
      <Container>
        <Text tag="h5" variant="body">
          {error}
        </Text>
      </Container>
    );
  return (
    <Container>
      <Text tag="h2" variant="title2">
        Featured songs
      </Text>
      {isSongsLoaded ? (
        filteredSongs.map((song) => <SongCard song={song} key={song.id} />)
      ) : (
        <Loading />
      )}
    </Container>
  );
};
