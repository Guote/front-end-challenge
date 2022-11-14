import { Text } from '$/components/Text';
import { SongList } from '$/components/SongList';

import { Container, SearchInput } from './styles';
import React, { useEffect, useState } from 'react';
import { MusicPlayer } from '$/components/MusicPlayer';
import { useDispatch, useSelector } from '$/store';
import { getIsPlayerOpen, getSongs, setFilteredSongs } from '$/store/player';
import { filterSongs } from '$/utils/helpers';

function HomeView(): JSX.Element {
  const dispatch = useDispatch();
  const [filterQuery, setFilterQuery] = useState<RegExp>(/^$/);
  const isPlayerOpen = useSelector(getIsPlayerOpen);
  const songs = useSelector(getSongs)

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regexp = new RegExp(`${event.target.value}`, 'i');
    setFilterQuery(regexp);
  };

  useEffect(()=> {
    const filteredSongs = filterSongs(filterQuery, songs)
    dispatch(setFilteredSongs(filteredSongs))
  }, [filterQuery])

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        placeholder="Search by title, genre..."
        onChange={handleFilterChange}
      />
      <SongList />
      {isPlayerOpen ? <MusicPlayer /> : null}
    </Container>
  );
}

export default HomeView;
