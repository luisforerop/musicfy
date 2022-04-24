import React, { useRef } from 'react'
import { useState } from 'react'
import Slider from '@mui/material/Slider'
import { useMusicfyContext } from '@context'

export const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0)
  const [isPaused, setIsPaused] = useState(true)
  const audio = useRef<null | HTMLAudioElement>(null)

  const { currentSong } = useMusicfyContext()
  return (
    <div style={{
      position: 'fixed',
      top: '90vh',
      width: '80vw',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        backgroundColor: '#ff4',
      }}>
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
        if (isPaused) {
          audio.current?.play()
          setIsPaused(false)
        } else {
          audio.current?.pause()
          setIsPaused(true)
        }
      }}>
        {isPaused ? 'Play' : 'Pause'}
      </button>
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
        style={{
          display: 'none',
        }}
      />
    </div>
  )
}
