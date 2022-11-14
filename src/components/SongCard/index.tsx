import React, { useEffect, useState } from 'react';

import { Props } from './types';
import { Text } from '$/components/Text';

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
import {
  Container,
  Thumbnail,
  SongBody,
  Description,
  SongDetails,
  PlayButton,
  Icon,
  Duration,
  FavButton,
  FavIcon,
} from './styles';

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
    <Container>
      <Thumbnail src={song.image} alt="Song cover image" />
      <SongBody>
        <Text tag="h3" variant="bodyBold">
          {song.name}
        </Text>
        <Text tag="p" variant="body">
          {song.author.name}
        </Text>
        <Description tag="p" variant="body2">
          {song.description}
        </Description>
        <SongDetails>
          <PlayButton onClick={handlePlay}>
            {currentSong === song && isPlaying ? (
              <Icon className="material-icons">&#xe034;</Icon>
            ) : (
              <Icon className="material-icons">&#xe037;</Icon>
            )}
          </PlayButton>
          <Duration tag="p" variant="caption">
            {duration}
          </Duration>
          <Label text={song.genre} />
        </SongDetails>
      </SongBody>
      <FavButton onClick={() => toggleFav(song.id)}>
        <FavIcon className={`material-icons ${isFav(song.id) ? 'active' : ''}`}>
          &#xe87d;
        </FavIcon>
      </FavButton>
    </Container>
  );
};
