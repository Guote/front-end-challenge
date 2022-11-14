import * as R from 'ramda';
import { Song } from '$/common/types';
import { EMPTY_SONG } from '$/common/constants';

export const getCurrentSong = R.pathOr<Song>(EMPTY_SONG, [
  'player',
  'player',
  'currentSong',
]);
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
