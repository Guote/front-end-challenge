import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Song } from '$/common/types';
import { EMPTY_SONG } from '$/common/constants';

export * from './selectors';

// Type for our state
export interface PlayerState {
  songs: Array<Song>;
  player: {
    isOpen: boolean;
    isPlaying: boolean;
    progress: number;
    currentSong: Song;
  };
}

// Initial state
const initialState: PlayerState = {
  songs: [],
  player: {
    isOpen: false,
    isPlaying: false,
    progress: 0,
    currentSong: EMPTY_SONG,
  },
};

// Actual Slice
export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentSong(state, action: PayloadAction<Song>) {
      state.player.currentSong = action.payload;
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

export const { setIsPlaying, setSongs, setOpenPlayer, setCurrentSong } =
  playerSlice.actions;

export default playerSlice.reducer;
