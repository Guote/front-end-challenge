
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils'
import { SongList } from './index';
import { MOCK_SONGS } from '../../utils/mock_songs';

describe('SongList component', () => {
  test('renders and shows "Featured Songs"', async () => {
    const songs = MOCK_SONGS;
    renderWithProviders(<SongList songs={songs} />);

    expect(screen.getByText(/Featured/i));
  });
});
