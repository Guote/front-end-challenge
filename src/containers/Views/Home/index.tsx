import React, { useState } from 'react';

import { Text } from '$/components/Text';
import { SongList } from '$/components/SongList';
import { Container, SearchInput } from './styles';
import { MusicPlayer } from '$/components/MusicPlayer';
import { useSelector } from '$/store';
import { getFilteredSongs, getIsPlayerOpen } from '$/store/player';

function HomeView(): JSX.Element {
  const [filterQuery, setFilterQuery] = useState<RegExp>(/./);
  const isPlayerOpen = useSelector(getIsPlayerOpen);
  const filteredSongs = useSelector(getFilteredSongs(filterQuery))

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regexp = new RegExp(`${event.target.value}`, 'i');
    setFilterQuery(regexp);
  };

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        placeholder="Search by title, genre..."
        onChange={handleFilterChange}
      />
      <SongList songs={filteredSongs}/>
      {isPlayerOpen ? <MusicPlayer /> : null}
    </Container>
  );
}

export default HomeView;
