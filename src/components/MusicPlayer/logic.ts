import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from '../../store';
import {
  getCurrentSong,
  getIsPlaying,
  getSongs,
  setCurrentSong,
  setIsPlaying,
} from '../../store/player';
import { useSelector } from 'react-redux';

export function usePlayerLogic() {
  const dispatch = useDispatch();
  const isPlaying = useSelector(getIsPlaying);
  const songs = useSelector(getSongs);
  const currentSong = useSelector(getCurrentSong);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [songDuration, setSongDuration] = useState<number>(0);

  const handlePlayPause = () => {
    dispatch(setIsPlaying(!isPlaying));
  };
  const handleUpdateCurrentTimeAuto = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  const handleUpdateCurrentTimeManual = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newTime = parseInt(event.target.value);
    if (audioRef.current) {
      setCurrentTime(newTime);
      audioRef.current.currentTime = newTime;
    }
  };

  const handlePrevious = () => {
    const currentIndex = songs.indexOf(currentSong);
    const newSong = songs[currentIndex - 1];
    if (newSong) {
      dispatch(setCurrentSong(newSong));
      dispatch(setIsPlaying(true));
    }
  };
  const handleNext = () => {
    const currentIndex = songs.indexOf(currentSong);
    const newSong = songs[currentIndex + 1];
    if (newSong) {
      dispatch(setCurrentSong(newSong));
      dispatch(setIsPlaying(true));
    }
  };

  // Play/Pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSong, isPlaying]);

  // Timer
  useEffect(() => {
    const audio = new Audio(currentSong.audio.url);
    audio.onloadedmetadata = () => {
      setSongDuration(audio.duration);
    };
  }, [currentSong]);

  return {
    audioRef,
    currentTime,
    songDuration,
    setSongDuration,
    handlePlayPause,
    handleUpdateCurrentTimeAuto,
    handleUpdateCurrentTimeManual,
    handlePrevious,
    handleNext,
  };
}
