import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '$/globals/constants/types';
import { EMPTY_SONG } from '$/globals/constants/constants';

export * from './selectors';

// Type for our state
export interface PlayerState {
  songs: Array<Song>;
  favoriteSongsId: Array<number>;
  filteredSongs: Array<Song>;
  player: {
    isOpen: boolean;
    isPlaying: boolean;
    progress: number;
    currentSong: Song;
  };
  error: string | undefined
}

// Initial state
const initialState: PlayerState = {
  songs: [],
  favoriteSongsId: [],
  filteredSongs: [],
  player: {
    isOpen: false,
    isPlaying: false,
    progress: 0,
    currentSong: EMPTY_SONG,
  },
  error: undefined
};

// Actual Slice
export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentSong(state, action: PayloadAction<Song>) {
      state.player.currentSong = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
    setFavoriteSongsId(state, action: PayloadAction<Array<number>>) {
      state.favoriteSongsId = action.payload;
    },
    setFilteredSongs(state, action: PayloadAction<Array<Song>>) {
      state.filteredSongs = action.payload;
    },
    setIsPlaying(state, action: PayloadAction<boolean>) {
      state.player.isPlaying = action.payload;
    },
    setOpenPlayer(state, action: PayloadAction<boolean>) {
      state.player.isOpen = action.payload;
    },
    setSongs(state, action: PayloadAction<Array<Song>>) {
      state.songs = action.payload;
    },
  },
});

export const {
  setCurrentSong,
  setFavoriteSongsId,
  setFilteredSongs,
  setError,
  setIsPlaying,
  setOpenPlayer,
  setSongs,
} = playerSlice.actions;

export default playerSlice.reducer;
