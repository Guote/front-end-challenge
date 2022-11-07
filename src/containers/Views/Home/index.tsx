import { Text } from '$/components/Text';
import { FeaturedSongs } from '$/components/FeaturedSongs';

import { Container, SearchInput } from './styles';

function HomeView(): JSX.Element {
  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput placeholder="Search by title, genre..." />
      <FeaturedSongs />
    </Container>
  );
}

export default HomeView;
