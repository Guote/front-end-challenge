import { ApolloError, gql, useQuery } from '@apollo/client';
import { Song } from '$/globals/constants/types';
import { SONGS_QUERY } from '../../globals/constants/constants';

export type Data = {
  songs: {
    songs: [Song];
  };
};

export function useFetchSongs() {
    const { data, error } = useQuery<Data, ApolloError | undefined>(
    gql(SONGS_QUERY),
  );
  let songs: Song[] = []
  let errorMessage: string | undefined = undefined

  if (error) {
    errorMessage = error.message
  }
  if (data && data.songs) {
    songs = data.songs.songs
  }
  return {songs, errorMessage}
}
