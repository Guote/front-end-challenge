import { Text } from '$/components/Text';
import { SongList } from '$/components/SongList';

import { Container, SearchInput } from './styles';
import { MusicPlayer } from '$/components/MusicPlayer';
import { useSelector } from '$/store';
import { getIsPlayerOpen } from '$/store/player';

function HomeView(): JSX.Element {
  const isPlayerOpen = useSelector(getIsPlayerOpen)
  
  console.log("isPlayerOpen", isPlayerOpen)
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <SongList />
      {isPlayerOpen ? <MusicPlayer /> : null}
    </Container>
  );
}

export default HomeView;
