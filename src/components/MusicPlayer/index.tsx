import { useMusicPlayerContext } from '@context'
import { useManageMusicPlayer } from '@hooks'
import Slider from '@mui/material/Slider'
import { CompactDisc, Previous, Next, Pause, Play } from '@components'
import { useEffect, useRef, useState } from 'react'
import styles from './MusicPlayer.module.css'
import { Controls } from './Controls'

const {
  container,
  compactDiscContainer,
  progressBar,
  progressBarContainer
} = styles

const formatTime = (time: number | string, inSeconds?: boolean) => {
  console.log({ time });

  if (!time) return '00:00'
  time = inSeconds ? Number(time) : Number(time) / 1000
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

export const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0)
  const [currentTimeFormated, setCurrentTimeFormated] = useState('00:00')
  const audio = useRef<null | HTMLAudioElement>(null)

  const { setMusicPlayer } = useMusicPlayerContext()

  const {
    currentSong,
    currentPlaylist,
    playing,
    next,
  } = useManageMusicPlayer()

  const duration = formatTime(currentSong?.duration_ms ?? 0)

  useEffect(() => {
    setMusicPlayer(audio.current)
  }, [setMusicPlayer])

  useEffect(() => {
    const _formatedTime = formatTime(currentTime, true)
    setCurrentTimeFormated(_formatedTime)
  }, [currentTime])


  return (
    <div className={container} >
      <div className={compactDiscContainer}>
        <CompactDisc />
      </div>
      <Controls playing={playing} />
      <div className={progressBarContainer}>
        <h3>{currentSong?.name}</h3>
        <div className={progressBar}>
          <span>
            {currentTimeFormated}
          </span>
          <div>
            <Slider
              onChange={(_, value) => {
                if (audio.current && typeof value === 'number') {
                  audio.current.currentTime = value
                }
              }}
              step={0.0000001}
              max={30}
              value={currentTime}
            />
          </div>
          <span>
            {duration}
          </span>
        </div>
      </div>
      <div></div>
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
