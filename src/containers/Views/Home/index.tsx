import { Text } from '$/components/Text';
import { SongList } from '$/components/SongList';

import { Container, SearchInput } from './styles';
import React, { useEffect, useState } from 'react';
import { MusicPlayer } from '$/components/MusicPlayer';
import { useDispatch, useSelector } from '$/store';
import { getIsPlayerOpen, getSongs, setFilteredSongs } from '$/store/player';
import * as R from 'ramda';

function HomeView(): JSX.Element {
  const dispatch = useDispatch();
  const [filterQuery, setFilterQuery] = useState<RegExp>(/^$/);
  const isPlayerOpen = useSelector(getIsPlayerOpen);
  const songs = useSelector(getSongs);

  const filteredSongs = R.filter(
    R.anyPass(
      [R.pipe(
       R.pathOr('', ['genre']),
       R.test(filterQuery)
      ),
      R.pipe(
       R.pathOr('', ['name']),
       R.test(filterQuery)
      ),
      R.pipe(
       R.pathOr('', ['author', 'name']),
       R.test(filterQuery)
      ),
      R.pipe(
       R.pathOr('', ['description']),
       R.test(filterQuery)
      )]
    )
  )(songs)

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regexp = new RegExp(`${event.target.value}`, 'i');
    setFilterQuery(regexp);
  };

  useEffect(()=> {
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
