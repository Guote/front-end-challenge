import HomeView from '$/containers/Views/Home';
import { useFetchSongs } from '$/services/graphql-songs';

function HomePage(): JSX.Element {
  useFetchSongs();
  return <HomeView />;
}

export default HomePage;
