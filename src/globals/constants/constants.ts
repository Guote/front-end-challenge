export const SONGS_QUERY = `
  query SongsQuery {
    songs {
      songs {
        id
        image
        name
        description
        genre
        audio {
          url
        }
        author {
          name
        }
      }
    }
  }
`;

export const EMPTY_SONG = {
  id: 0,
  name: '',
  author: {
    name: '',
  },
  description: '',
  genre: '',
  image: '',
  audio: {
    url: '',
  },
};

export const FAV_KEY_LOCAL_STORAGE = 'FAV_KEY_LOCAL_STORAGE';