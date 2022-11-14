import { gql, useQuery } from '@apollo/client';
import { Song } from '$/globals/constants/types';
import { SONGS_QUERY } from '../../globals/constants/constants';
import { useDispatch } from '../../store';
import { setFilteredSongs, setSongs } from '../../store/player';

export type Data = {
  songs: {
    songs: [Song];
  };
};

export function useFetchSongs() {
  const dispatch = useDispatch()
  const { data } = useQuery<Data>(gql(SONGS_QUERY));
  let songs: Array<Song> = [];
  if (data && data.songs) {
    songs = data.songs.songs;
    dispatch(setSongs(songs))
    dispatch(setFilteredSongs(songs))
  }
}
