import { useMusicPlayerContext } from '@context'
import { Song } from '@models'

export const useManageMusicPlayer = () => {
  const {
    setCurrentPlaylist,
    setCurrentSong,
    currentPlaylist,
    currentSong,
    musicPlayer,
    currentSongId,
    setCurrentSongId,
    playing,
    setPlaying,
  } = useMusicPlayerContext()



  const delayPlay = () => {
    setTimeout(() => {
      setPlaying(true)
      musicPlayer && musicPlayer.play()
    }, 100)
  }

  const next = () => {
    if (currentSongId < (currentPlaylist?.length ?? 0) - 1) {
      setCurrentSongId(curr => {
        const newSongId = curr + 1
        currentPlaylist && setCurrentSong(currentPlaylist[newSongId])
        return newSongId
      })
      delayPlay()
    } else {
      setPlaying(false)
      if (musicPlayer) musicPlayer.currentTime = 0
      currentPlaylist && setCurrentSong(currentPlaylist[0])
      setCurrentSongId(0)
    }
  }

  const previous = () => {
    if (currentSongId > 0) {
      setCurrentSongId(curr => {
        const newSongId = curr - 1
        currentPlaylist && setCurrentSong(currentPlaylist[newSongId])
        delayPlay()
        return newSongId
      })
    }
  }

  const newPlaylist = (playlist: Song[]) => {
    setCurrentPlaylist(playlist)
    setCurrentSongId(0)
    setPlaying(true)
  }

  const playSong = (song: Song) => {
    setCurrentPlaylist([song])
    setCurrentSongId(0)
    setCurrentSong(song)
    delayPlay()
  }

  const addSong = (song: Song) => {
    setCurrentPlaylist(curr => curr ? [...curr, song] : [song])
  }

  const play = () => {
    if (currentPlaylist) {
      if (!currentSong) {
        setCurrentSong(currentPlaylist[0])
        delayPlay()
      } else {
        setPlaying(true)
        musicPlayer && musicPlayer.play()
      }
    }
  }

  const pause = () => {
    if (currentPlaylist) {
      setPlaying(false)
      musicPlayer && musicPlayer.pause()
    }
  }

  return {
    next,
    previous,
    newPlaylist,
    playSong,
    addSong,
    play,
    pause,
    playing,
    currentSongId,
    currentPlaylist,
    currentSong,
  }

}
