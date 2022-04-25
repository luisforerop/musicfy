import { createContext, useContext, useState, } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { Song, FC } from '@models'


interface IMusicPlayerContext {
  currentPlaylist: Song[] | null
  setCurrentPlaylist: Dispatch<SetStateAction<Song[] | null>>
  currentSong: Song | null
  setCurrentSong: Dispatch<SetStateAction<Song | null>>
  musicPlayer: HTMLAudioElement | null
  setMusicPlayer: Dispatch<SetStateAction<HTMLAudioElement | null>>
  playing: boolean
  setPlaying: Dispatch<SetStateAction<boolean>>
  currentSongId: number
  setCurrentSongId: Dispatch<SetStateAction<number>>
}
const MusicPlayerContext = createContext({} as IMusicPlayerContext)

export const useMusicPlayerContext = () => useContext(MusicPlayerContext)

export const MusicPlayerContextProvider: FC = ({ children }) => {
  const { Provider } = MusicPlayerContext

  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [currentPlaylist, setCurrentPlaylist] = useState<Song[] | null>(null)
  const [musicPlayer, setMusicPlayer] = useState<null | HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentSongId, setCurrentSongId] = useState<number>(0)

  const context: IMusicPlayerContext = {
    currentSong,
    setCurrentSong,
    currentPlaylist,
    setCurrentPlaylist,
    musicPlayer,
    setMusicPlayer,
    playing,
    setPlaying,
    currentSongId,
    setCurrentSongId,
  }
  return <Provider value={context}>
    {children}
  </Provider>
}