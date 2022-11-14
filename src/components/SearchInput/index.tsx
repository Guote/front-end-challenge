import { Container, Input, SearchLineIcon } from './styles';
import { SearchInputProps } from './types';

export const SearchInput = ({ placeholder, className, value, onChange }: SearchInputProps) => (
  <Container className={className}>
    <SearchLineIcon />
    <Input
      name="search"
      label="search"
      hideLabel={true}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </Container>
);
