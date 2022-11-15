import { EMPTY_SONG } from '../../globals/constants/constants';
import { MOCK_SONGS } from '../../utils/mock_songs';
import { RootState } from '../store';
import { getFilteredSongs } from './selectors';

const initialState: RootState = {
  player: {
    songs: [],
    favoriteSongsId: [],
    filteredSongs: [],
    player: {
      isOpen: false,
      isPlaying: false,
      progress: 0,
      currentSong: EMPTY_SONG,
    },
    error: undefined,
  },
};

describe('Test for filterSongs helper', () => {
  test('Filters by songs that contain the query either in name, genre, author or description', () => {
    const testState = { player: { songs: MOCK_SONGS}};
    const state = Object.assign({}, initialState, testState);
    const filterQuery = /dr/i;
    const filteredSongs = [MOCK_SONGS[1], MOCK_SONGS[9], MOCK_SONGS[17]];
    
    expect(getFilteredSongs(filterQuery)(state)).toStrictEqual(filteredSongs);
  });
});
