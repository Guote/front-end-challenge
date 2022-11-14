import { Input } from './styles';

interface Props {
  value: number;
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRange: React.FC<Props> = ({ value, max, onChange }) => {
  const progress = (value / max) * 100
  const style = {
    '--progress': `${progress}%`  
  } as React.CSSProperties;
  return (
    <Input
      type="range"
      value={progress}
      max={100}
      min={0}
      step={1}
      onChange={onChange}
      style={style}
    />
  );
};
