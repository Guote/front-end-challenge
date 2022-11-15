import * as R from 'ramda';
import { Song } from '$/globals/constants/types';
import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export const getCurrentSong= (state: RootState) => state.player.player.currentSong
export const getFavoriteSongsId= (state: RootState) => state.player.favoriteSongsId
export const getError= (state: RootState) => state.player.error

export const getIsPlayerOpen= (state: RootState) => state.player.player.isOpen
export const getIsPlaying= (state: RootState) => state.player.player.isPlaying

export const getSongs = (state: RootState) => state.player.songs;

type Return = (state: RootState) => Song[];
export const getFilteredSongs = (filterQuery: RegExp): Return =>
  createSelector([getSongs], (songs) =>
    R.ifElse(
      R.isEmpty,
      R.identity,
      R.filter(
        R.anyPass([
          R.pipe(R.pathOr('', ['genre']), R.test(filterQuery)),
          R.pipe(R.pathOr('', ['name']), R.test(filterQuery)),
          R.pipe(R.pathOr('', ['author', 'name']), R.test(filterQuery)),
          R.pipe(R.pathOr('', ['description']), R.test(filterQuery)),
        ]),
      ),
    )(songs),
  );
