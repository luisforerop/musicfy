import { ApiAlbums, ApiArtists, ApiSongs, Artist, Song } from '@models';
import { useEffect, useState } from 'react';

type UseGetSongs = (apiInfo: {
  apiAlbums: ApiAlbums | null
  apiArtists: ApiArtists | null
  apiSongs: ApiSongs | null
}) => Song[] | null


export const useGetSongs: UseGetSongs = ({
  apiSongs,
}) => {
  const [songs, setSongs] = useState<Song[] | null>(null)


  return (
    songs
  )
}
