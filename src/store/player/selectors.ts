import * as R from 'ramda';
import { Song } from '$/globals/constants/types';
import { EMPTY_SONG } from '$/globals/constants/constants';

export const getCurrentSong = R.pathOr<Song>(EMPTY_SONG, [
  'player',
  'player',
  'currentSong',
]);
export const getFavoriteSongsId = R.pathOr<Array<number>>([], ['player', 'favoriteSongsId']);
export const getError = R.pathOr<string | boolean>(false, ['player', 'error']);
export const getFilteredSongs = R.pathOr<Array<Song>>([], ['player', 'filteredSongs']);
export const getIsPlayerOpen = R.pathOr<boolean>(false, [
  'player',
  'player',
  'isOpen',
]);
export const getIsPlaying = R.pathOr<boolean>(false, [
  'player',
  'player',
  'isPlaying',
]);
export const getSongs = R.pathOr<Array<Song>>([], ['player', 'songs']);
