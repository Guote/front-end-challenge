import * as selectors from './index';
import { MOCK_SONGS } from '$/utils/mock_songs';

describe('player selectors', () => {
  test('getCurrentSong', () => {
    const currentSong = MOCK_SONGS[0];
    const state = {
      player: {
        player: {
          currentSong: MOCK_SONGS[0],
        },
      },
    };
    const selector = selectors.getCurrentSong(state);
    expect(selector).toStrictEqual(currentSong);
  });
});
