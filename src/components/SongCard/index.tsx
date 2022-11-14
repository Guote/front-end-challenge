import React, { useEffect, useState } from 'react';

import { Props } from './types';
import { Text } from '$/components/Text';

import * as S from './styles';
import { Label } from './GenreLabel';
import { formatAudioDuration } from '../../utils/helpers';
import { useDispatch, useSelector } from '../../store';
import {
  getCurrentSong,
  getIsPlayerOpen,
  getIsPlaying,
  setCurrentSong,
  setIsPlaying,
  setOpenPlayer,
} from '../../store/player';
import { useFavSongs } from '../../services/favorites';

export const SongCard = ({ song }: Props) => {
  const isPlayerOpen = useSelector(getIsPlayerOpen);
  const currentSong = useSelector(getCurrentSong);
  const isPlaying = useSelector(getIsPlaying);
  const dispatch = useDispatch();
  const [duration, setDuration] = useState<string>('');

  const { isFav, toggleFav } = useFavSongs();

  useEffect(() => {
    const audio = new Audio(song.audio.url);
    audio.onloadedmetadata = () => {
      setDuration(formatAudioDuration(audio.duration));
    };
  }, []);

  const handlePlay = () => {
    if (!isPlayerOpen) {
      dispatch(setOpenPlayer(true));
    }
    if (currentSong !== song) {
      dispatch(setCurrentSong(song));
      dispatch(setIsPlaying(true));
    } else {
      dispatch(setIsPlaying(!isPlaying));
    }
  };

  return (
    <S.Container>
      <S.Thumbnail src={song.image} alt="Song cover image" />
      <S.SongBody>
        <Text tag="h3" variant="bodyBold">
          {song.name}
        </Text>
        <Text tag="p" variant="body">
          {song.author.name}
        </Text>
        <S.Description tag="p" variant="body2">
          {song.description}
        </S.Description>
        <S.SongDetails>
          <S.PlayButton onClick={handlePlay}>
            {currentSong === song && isPlaying ? (
              <S.Icon className="material-icons">&#xe034;</S.Icon>
            ) : (
              <S.Icon className="material-icons">&#xe037;</S.Icon>
            )}
          </S.PlayButton>
          <S.Duration tag="p" variant="caption">
            {duration}
          </S.Duration>
          <Label text={song.genre} />
        </S.SongDetails>
      </S.SongBody>
      <S.FavButton onClick={() => toggleFav(song.id)}>
        <S.FavIcon className={`material-icons ${isFav(song.id) ? 'active':''}`} >
          &#xe87d;
        </S.FavIcon>
      </S.FavButton>
    </S.Container>
  );
};
