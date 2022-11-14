import { formatAudioDuration, filterSongs } from './helpers';
import { MOCK_SONGS } from './mock_songs';

describe('Tests for formatAudioDuration helper', () => {
  test('should return "m min s s" when "mode" is not defined', () => {
    expect(formatAudioDuration(75)).toEqual('1 min 15 s');
  });
  test('should return "m min s s" when "mode" is other than ":"', () => {
    expect(formatAudioDuration(75, 'someOtherMode')).toEqual('1 min 15 s');
  });
  test('should return m:ss when mode=":"', () => {
    expect(formatAudioDuration(75, ':')).toEqual('1:15');
  });
  test('should return ss when mode=":" and the value is less than 60', () => {
    expect(formatAudioDuration(59, ':')).toEqual('0:59');
  });
});

describe('Test for filterSongs helper', () => {
  test('Filters by songs that contain the query either in name, genre, author or description', () => {
    const songs = MOCK_SONGS
    const filterQuery = /dr/i
    const filteredSongs = [MOCK_SONGS[1], MOCK_SONGS[9], MOCK_SONGS[17] ]
    expect(filterSongs(filterQuery, songs)).toStrictEqual(filteredSongs)
  })
})
