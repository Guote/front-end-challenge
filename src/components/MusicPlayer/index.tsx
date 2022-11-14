import { useSelector } from '../../store';
import {
  getCurrentSong,
  getIsPlaying,

} from '../../store/player';
import { formatAudioDuration } from '../../utils/helpers';
import { InputRange } from '../InputRange';
import { Text } from '../Text';
import { usePlayerLogic } from './logic';
import {
  PlayerContainer,
  SongInformation,
  Cover,
  SongDetails,
  PlayerControls,
  Button,
  Icon,
  PlayButton,
  PlayIcon,
  ProgressTime,
  ProgressTimeText,
} from './styles';

export const MusicPlayer: React.FC = () => {
  const isPlaying = useSelector(getIsPlaying);
  const currentSong = useSelector(getCurrentSong);

  const {
    audioRef,
    currentTime,
    songDuration,
    handlePlayPause,
    handleUpdateCurrentTimeAuto,
    handleUpdateCurrentTimeManual,
    handlePrevious,
    handleNext,
  } = usePlayerLogic();

  const {
    image,
    audio: { url },
    name,
    author: { name: authorName },
  } = currentSong;

  return (
    <PlayerContainer>
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={handleUpdateCurrentTimeAuto}
      />

      <SongInformation>
        <Cover src={image} />
        <SongDetails>
          <Text variant="body2" tag="p" color="white">
            {name}
          </Text>
          <Text variant="caption" tag="small" color="grayscale200">
            {authorName}
          </Text>
        </SongDetails>
      </SongInformation>
      <PlayerControls>
        <Button onClick={handlePrevious}>
          <Icon className="material-icons">&#xe045;</Icon>
        </Button>
        <PlayButton onClick={handlePlayPause}>
          {isPlaying ? (
            <PlayIcon className="material-icons">&#xe034;</PlayIcon>
          ) : (
            <PlayIcon className="material-icons">&#xe037;</PlayIcon>
          )}
        </PlayButton>
        <Button onClick={handleNext}>
          <Icon className="material-icons">&#xe044;</Icon>
        </Button>
      </PlayerControls>
      <ProgressTime>
        <ProgressTimeText variant="caption" tag="small" color="white">
          {formatAudioDuration(currentTime, ':')}
        </ProgressTimeText>
        <InputRange 
          value={currentTime}
          max={songDuration}
          onChange={handleUpdateCurrentTimeManual}
        />
        <ProgressTimeText variant="caption" tag="small" color="white">
          {formatAudioDuration(songDuration, ':')}
        </ProgressTimeText>
      </ProgressTime>
    </PlayerContainer>
  );
};
