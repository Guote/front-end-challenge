import { screen } from '@testing-library/react';
import { renderWithProviders } from '$/utils/test-utils';
import { Label } from './index';

describe('GenreLabel component', () => {
  test('renders and shows its text', async () => {
    renderWithProviders(<Label text={'test'} />);
    expect(screen.getByText('test'));
  });
});
