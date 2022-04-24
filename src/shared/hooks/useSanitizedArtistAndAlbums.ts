import type { Album, Albums, ApiAlbum, ApiAlbums, ApiArtist, ApiArtists, ApiSongs, Artist, Song } from '@models';
import { useEffect, useState } from 'react';

type SanitizedInformation = {
  artists: Artist[] | null
  albums: Albums | null
}

type UseSanitizedArtistAndAlbums = (apiInfo: {
  apiAlbums: ApiAlbums | null
  apiArtists: ApiArtists | null
  apiSongs: ApiSongs | null
}) => SanitizedInformation

const getSongsInfo = (apiSongs: ApiSongs, albumsIds: number[]) => {
  const artistSongs = apiSongs
    .filter(({ album }) => albumsIds?.includes(album))

  const songsQuantity = artistSongs.reduce((acc, { songs }) => acc + songs.length, 0)

  return {
    songsQuantity,
  }
}

const getAlbumsInfo = (apiAlbums: ApiAlbums, artist: ApiArtist) => {
  const { name, id: artistId } = artist
  // La api retorna un array de albums. Algunos están repetidos.
  const repeatedAlbumsData = apiAlbums.filter(({ artist }) => (
    artist === artistId
  ))[0]?.albums

  const albumsDataObject: { [key: string]: ApiAlbum } = {}

  repeatedAlbumsData?.forEach(album => {
    const { name } = album
    albumsDataObject[name] = album
  })

  const albumsData: ApiAlbum[] = Object.values(albumsDataObject)

  const albums: Album[] = albumsData?.map(albumData => ({
    ...albumData,
    artist: name,
  }))

  const albumsIds = albumsData?.map(({ id }) => id)
  const albumsQuantity = albumsData ? albumsData.length : 0
  return {
    albums,
    albumsIds,
    albumsQuantity,
  }
}

export const useSanitizedArtistAndAlbums: UseSanitizedArtistAndAlbums = ({
  apiAlbums,
  apiArtists,
  apiSongs,
}) => {
  const [artists, setArtists] = useState<Artist[] | null>(null)
  const [albums, setAlbums] = useState<Albums | null>(null)

  useEffect(() => {
    const localArtist = localStorage.getItem('Artists')
    if (localArtist) {
      setArtists(JSON.parse(localArtist))
    }
  }, [])

  useEffect(() => {
    console.log({ apiArtists, apiSongs, apiAlbums })

    if (!artists && apiAlbums && apiArtists && apiSongs) {
      // Obtemos el objeto artist con las propiedades faltantes
      // Aprovechamos los bucles para obtener los albumes

      const _artists: Artist[] = apiArtists.map((artist) => {
        const { name } = artist
        const { albums, albumsIds, albumsQuantity, } = getAlbumsInfo(apiAlbums, artist)
        setAlbums(prevAlbums => prevAlbums
          ? {
            ...prevAlbums,
            [name]: albums
          }
          : {
            [name]: albums
          })

        const { songsQuantity } = getSongsInfo(apiSongs, albumsIds)

        return ({
          ...artist,
          albums: albumsQuantity,
          songs: songsQuantity,
        })
      })

      setArtists(_artists)
      console.log({ _artists })

      // localStorage.setItem('Artists', JSON.stringify(_artists))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiAlbums, apiArtists, apiSongs])

  return {
    artists,
    albums,
  }
}
