import { useManageMusicPlayer } from '@hooks'
import { FC, Song } from '@models'
import { Play, Plus } from '@components'
import React from 'react'
import styles from './AlbumSongs.module.css'

interface SongProps extends Song {
  itemId: number
}

const {
  songContainer,
  controlsContainer,
} = styles

export const AlbumSong: FC<SongProps> = (song) => {
  const { name, duration_ms, itemId } = song
  const { playSong, addSong } = useManageMusicPlayer()

  const duration = new Date(Number(duration_ms)).toISOString().substr(11, 8)

  return (
    <li className={songContainer}>
      <h3>
        {itemId}. {name}
      </h3>
      <div className={controlsContainer}>
        <span>
          {duration}
        </span>
        <button onClick={
          () => playSong(song)
        } >
          <Play fill='var(--text-secondary-color)' />
        </button>

        <button onClick={
          () => addSong(song)
        } >
          <Plus fill='var(--text-secondary-color)' />
        </button>
      </div>
    </li>
  )
}
