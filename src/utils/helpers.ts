import * as R from 'ramda'
import {Song} from '$/globals/constants/types'

export const formatAudioDuration = (duration: number, mode: string = '') => {
  const min = Math.floor(duration / 60);
  const s = Math.floor(duration % 60);
  if (mode === ':') {
    return s < 10 ? `${min}:0${s}` : `${min}:${s}`;
  }
  return min > 0 ? `${min} min ${s} s` : `${s} s`;
};

export const filterSongs = (filterQuery: RegExp, songs: Array<Song>) => R.filter(
    R.anyPass(
      [R.pipe(
       R.pathOr('', ['genre']),
       R.test(filterQuery)
      ),
      R.pipe(
       R.pathOr('', ['name']),
       R.test(filterQuery)
      ),
      R.pipe(
       R.pathOr('', ['author', 'name']),
       R.test(filterQuery)
      ),
      R.pipe(
       R.pathOr('', ['description']),
       R.test(filterQuery)
      )]
    )
)(songs)