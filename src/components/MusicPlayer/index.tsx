import { useMusicPlayerContext } from '@context'
import { useManageMusicPlayer } from '@hooks'
import Slider from '@mui/material/Slider'
import { useEffect, useRef, useState } from 'react'

export const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0)
  const audio = useRef<null | HTMLAudioElement>(null)

  const { setMusicPlayer } = useMusicPlayerContext()

  const {
    currentSong,
    currentPlaylist,
    playSong,
    playing,
    addSong,
    currentSongId,
    newPlaylist,
    next,
    previous,
    pause,
    play,
  } = useManageMusicPlayer()

  useEffect(() => {
    setMusicPlayer(audio.current)
  }, [setMusicPlayer])

  return (
    <div style={{
      overflow: 'hidden',
      height: '15vh',
      width: '100vw',
      display: 'flex',
      backgroundColor: '#ff4',
      justifyContent: 'center',
    }}>
      <div style={{
        backgroundColor: '#2f4',
      }}>
        {currentSongId + '||'}
        {currentTime}
      </div>
      <Slider
        onChange={(_, value) => {
          if (audio.current && typeof value === 'number') {
            audio.current.currentTime = value
          }
        }}
        valueLabelDisplay="on"
        step={0.0000001}
        max={30}
        value={currentTime}

      />
      <button onClick={() => {
        if (!playing) {
          play()
        } else {
          pause()
        }
      }}>
        {!playing ? 'Play' : 'Pause'}
      </button>
      <button onClick={next} >Next</button>
      <button onClick={previous} >Back</button>
      <div></div>
      {currentSong?.name}
      <div></div>
      Playlist
      {currentPlaylist?.map(song => song.name).join(', ')}
      <audio
        ref={audio}
        src={currentSong?.preview_url}
        controls
        preload='preload'
        id='test'
        onTimeUpdate={(e: any) => {
          const { currentTime } = e.target as { currentTime: number }
          setCurrentTime(currentTime)
        }}
        onEnded={() => {
          next()
        }}
        style={{
          display: 'none',
        }}
      />
    </div>
  )
}
