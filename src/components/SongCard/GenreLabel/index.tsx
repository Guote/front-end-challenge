import { Text } from '$/components/Text';

import { LabelContainer } from './styles';
import type { Props } from './types';

export const Label = ({ text }: Props) => {
  const formattedText = text.replace('_', ' ').toLowerCase();
  return (
    <LabelContainer>
      <Text tag="small" variant="caption">
        {formattedText}
      </Text>
    </LabelContainer>
  );
};
