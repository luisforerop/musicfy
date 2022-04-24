import { ALBUMS_URL, ARTISTS_URL, SONGS_URL } from '@constants'
import { ApiAlbums, ApiArtist, ApiArtists, ApiSongs } from '@models'
import { useEffect, useState } from 'react'

export const useGetApiData = () => {

  const [apiArtists, setArtists] = useState<ApiArtists | null>(null)
  const [apiSongs, setSongs] = useState<ApiSongs | null>(null)
  const [apiAlbums, setAlbums] = useState<ApiAlbums | null>(null)

  useEffect(() => {
    const localArtists = localStorage.getItem('artists')
    if (!localArtists) {
      fetch(ARTISTS_URL)
        .then(res => res.json())
        .then(data => {
          setArtists(data)
        })
    }

    const localSongs = localStorage.getItem('songs')
    if (!localSongs) {
      fetch(SONGS_URL)
        .then(res => res.json())
        .then(data => {
          setSongs(data)
        })
    }

    const localAlbums = localStorage.getItem('albums')
    if (!localAlbums) {
      fetch(ALBUMS_URL)
        .then(res => res.json())
        .then(data => {
          setAlbums(data)
        })
    }
  }, [])

  return {
    apiArtists,
    apiSongs,
    apiAlbums,
  }

}
