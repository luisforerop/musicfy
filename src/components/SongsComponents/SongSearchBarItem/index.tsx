import { Play, Plus } from '@components';
import { useManageMusicPlayer } from '@hooks';
import { FC, Song } from '@models';
import styles from './SongSearchBarItem.module.css';

const {
  container,
  buttonContainer,
  button,
} = styles

export const SongSearchBarItem: FC<Song> = (songData) => {
  const { name, } = songData
  const { addSong, playSong } = useManageMusicPlayer()
  return (
    <div className={container}>
      {name}
      <div className={buttonContainer}>
        <button className={button} onClick={() => playSong(songData)} >
          <div>
            <Play fill='var(--text-secondary-color)' />
          </div>
          <span>Reproducir</span>
        </button>
        <button className={button} onClick={() => addSong(songData)} >
          <div>
            <Plus fill='var(--text-secondary-color)' />
          </div>
          <span>Agregar</span>
        </button>
      </div>
    </div>
  )
}
