import React from 'react';

import { Props } from './types';
import { Text } from '$/components/Text';

import {
  SongDetails,
  SongBody,
  Container,
  Description,
  Duration,
  Thumbnail,
} from './styles';
import { Label } from './GenreLabel';
import { PlayButton } from './PlayButton';

export const SongCard = ({ song }: Props) => {

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
          <PlayButton/>
          <Duration tag="p" variant="caption">
            asd
          </Duration>
          <Label text={song.genre}/>
        </SongDetails>
      </SongBody>
    </Container>
  );
};