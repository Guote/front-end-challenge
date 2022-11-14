export const formatAudioDuration = (duration: number, mode: string = '') => {
  const min = Math.floor(duration / 60);
  const s = Math.floor(duration % 60);
  if (mode === ':') {
    return s < 10 ? `${min}:0${s}` : `${min}:${s}`;
  }
  return min > 0 ? `${min} min ${s} s` : `${s} s`;
};
