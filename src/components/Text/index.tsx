import { Container } from './styles';
import type { TextProps } from './types';

export const Text = ({
  tag,
  variant,
  children,
  className,
  color = 'grayscale900',
  ...props
}: TextProps) => (
  <Container as={tag} $color={color} $variant={variant} className={className} {...props}>
    {children}
  </Container>
);
