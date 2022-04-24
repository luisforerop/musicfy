import type { Albums, Artist, FC, Song } from '@models'
import type { Dispatch, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'
import { useGetApiData } from '../hooks/useGetApiData'
import { useSanitizedArtistAndAlbums } from '../hooks/useSanitizedArtistAndAlbums'

interface IMusicfyContext {
  artists: Artist[] | null
  albums: Albums | null
  // songs: Song[] | null
  // playlists: Playlists | null
  currentSong: Song | null
  setCurrentSong: Dispatch<SetStateAction<Song | null>>
}
const MusicfyContext = createContext({} as IMusicfyContext)

export const useMusicfyContext = () => useContext(MusicfyContext)

export const MusicfyContextProvider: FC = ({ children }) => {
  const { Provider } = MusicfyContext

  const [currentSong, setCurrentSong] = useState<Song | null>(null)

  const {
    apiAlbums,
    apiArtists,
    apiSongs,
  } = useGetApiData()

  const { albums, artists } = useSanitizedArtistAndAlbums({ apiAlbums, apiArtists, apiSongs })

  const context: IMusicfyContext = {
    artists,
    albums,
    currentSong,
    setCurrentSong,
  }
  return <Provider value={context}>
    {children}
  </Provider>
}