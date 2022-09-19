import { Colors } from '$/styles/themes/theme';
import { typography } from '$/styles/themes/typography';
import styled from 'styled-components';

import { TVariants } from './types';

export const Container = styled.p<{ $color: Colors; $variant: TVariants }>`
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme, $color }) => theme.color[$color]};
  ${({ $variant }) => typography[$variant]}
`;