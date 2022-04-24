import { ApiAlbums, ApiArtists, ApiSongs, Artist, Song } from '@models';
import { useEffect, useState } from 'react';
import { useMusicfyContext } from '@context';


// MEJORAR EL PERFORMANCES DEL FILTRADO DE CANCIONES

type UseGetSongs = (
  config: {
    by: 'ARTIST' | 'ALBUM' | 'ALL_SONGS',
    artist?: string,
    albumId?: number,
  }
) => Song[] | null

export const useGetSongs: UseGetSongs = ({ by, artist, albumId }) => {
  const { apiSongs, artists, albums } = useMusicfyContext()
  const [songs, setSongs] = useState<Song[] | null>(null)

  useEffect(() => {
    if (apiSongs) {
      if (by === 'ALL_SONGS') {
        const songsData: Song[] = []
        const repeatedSongs = apiSongs.reduce(
          (acc, { songs }) => [...acc, ...songs],
          [...apiSongs[0].songs]
        )
        new Set(repeatedSongs).forEach(songs => songsData.push(songs))
        setSongs(songsData)
      }

      if (by === 'ARTIST' && artist && artists) {
        const { albumsIds } = artists.find(({ name }) => name === artist) ?? {}
        if (albumsIds) {
          const firstSong = apiSongs.find(({ album }) => albumsIds?.includes(album))?.songs ?? []
          const songsData: Song[] = []
          const repeatedSongs = apiSongs.reduce(
            (acc, { songs, album }) => albumsIds.includes(album) ? [...acc, ...songs] : acc,
            firstSong
          )
          new Set(repeatedSongs).forEach(songs => songsData.push(songs))
          setSongs(songsData)
        }
      }

      if (by === 'ALBUM' && albumId && albums && artist) {
        const { id } = albums[artist].find(({ id }) => id === albumId) ?? {}
        const firstSong = apiSongs.find(({ album }) => albumId === album)?.songs ?? []
        const songsData: Song[] = []
        const repeatedSongs = apiSongs.reduce(
          (acc, { songs, album }) => {
            return album === id ? [...acc, ...songs] : acc
          },
          firstSong
        )
        new Set(repeatedSongs).forEach(songs => songsData.push(songs))
        setSongs(songsData)
      }


    }
  }, [apiSongs, by, artist, artists, albumId, albums])



  return songs
}
