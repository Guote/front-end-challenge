import { useSelector } from '$/store';
import { getError } from '$/store/player';
import * as R from 'ramda';
import { SongCard } from '../SongCard';
import { Text } from '../Text';
import { Container, Loading } from './styles';
import { Song } from '../../globals/constants/types';

type Props = {
  songs: Song[];
};
export const SongList = ({ songs }: Props) => {
  const error = useSelector(getError);
  const isSongsLoaded = R.not(R.isEmpty(songs));

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
        songs.map((song) => <SongCard song={song} key={song.id} />)
      ) : (
        <Loading />
      )}
    </Container>
  );
};
