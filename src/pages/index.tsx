import HomeView from '$/containers/Views/Home';
import { useFetchSongs } from '$/services/graphql-songs';
import { useEffect } from 'react';
import { useDispatch } from '../store';
import { setError, setSongs } from '../store/player';

function HomePage(): JSX.Element {
  const dispatch = useDispatch();
  const {songs, errorMessage} = useFetchSongs()

  useEffect(() => {
    if(errorMessage) {dispatch(setError(errorMessage))}
    dispatch(setSongs(songs))
  }, [songs, errorMessage]);

  return <HomeView />;
}

export default HomePage;
