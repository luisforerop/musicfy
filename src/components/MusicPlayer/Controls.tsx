import { Next, Pause, Play, Previous } from '@components'
import { useManageMusicPlayer } from '@hooks'
import { FC } from '@models'
import styles from './MusicPlayer.module.css'

const {
  controlsContainer,
} = styles

type ControlsProps = {
  playing: boolean
}

export const Controls: FC<ControlsProps> = ({ playing }) => {
  const {
    next,
    previous,
    pause,
    play,
  } = useManageMusicPlayer()
  return (
    <div className={controlsContainer}>
      <button onClick={previous} >
        <Previous fill='var(--text-primary-color)' />
      </button>
      <button onClick={() => {
        if (!playing) {
          play()
        } else {
          pause()
        }
      }}>
        {!playing
          ? <Play fill='var(--text-primary-color)' />
          : <Pause fill='var(--text-primary-color)' />
        }
      </button>
      <button onClick={next} >
        <Next fill='var(--text-primary-color)' />
      </button>
    </div>
  )
}
