import type { Albums, ApiAlbums, ApiSongs, IArtist, FC } from '@models'
import { createContext, useContext } from 'react'
import { useGetApiData } from '../hooks/useGetApiData'
import { useSanitizedArtistAndAlbums } from '../hooks/useSanitizedArtistAndAlbums'

interface IMusicfyContext {
  artists: IArtist[] | null
  albums: Albums | null
  apiSongs: ApiSongs | null
  apiAlbums: ApiAlbums | null
}
const MusicfyContext = createContext({} as IMusicfyContext)

export const useMusicfyContext = () => useContext(MusicfyContext)

export const MusicfyContextProvider: FC = ({ children }) => {
  const { Provider } = MusicfyContext

  const {
    apiAlbums,
    apiArtists,
    apiSongs,
  } = useGetApiData()

  const { albums, artists } = useSanitizedArtistAndAlbums({ apiAlbums, apiArtists, apiSongs })

  const context: IMusicfyContext = {
    artists,
    albums,
    apiSongs,
    apiAlbums,
  }
  return <Provider value={context}>
    {children}
  </Provider>
}