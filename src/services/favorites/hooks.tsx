import { useEffect } from 'react';
import { FAV_KEY_LOCAL_STORAGE } from '../../globals/constants/constants';
import { useDispatch, useSelector } from '../../store';
import { getFavoriteSongsId, setFavoriteSongsId } from '../../store/player';

export function useFavSongs() {
  const dispatch = useDispatch();
  const favoriteSongsId = useSelector(getFavoriteSongsId);

  useEffect(() => {
    const items = window.localStorage.getItem(FAV_KEY_LOCAL_STORAGE);
    const cachedFavorites = items ? (JSON.parse(items) as Array<number>) : [];
    dispatch(setFavoriteSongsId(cachedFavorites));
  }, []);

  const isFav = (id: number) => favoriteSongsId.includes(id);
  const toggleFav = (id: number) => {
    const newList = isFav(id)
      ? favoriteSongsId.filter((savedId) => savedId !== id)
      : [id, ...favoriteSongsId];
    dispatch(setFavoriteSongsId(newList));
    window.localStorage.setItem(FAV_KEY_LOCAL_STORAGE, JSON.stringify(newList));
  };

  return { isFav, toggleFav };
}
