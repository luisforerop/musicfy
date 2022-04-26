import { FC, Song } from '@models';
import { AlbumSong } from './Song'
import styles from './AlbumSongs.module.css'

const {
  container
} = styles


type AlbumSongsProps = {
  songs: Song[] | null
}

export const AlbumSongs: FC<AlbumSongsProps> = ({ songs }) => {

  return (
    <ol className={container}>
      {songs?.map((song, index) => {
        const { id, name } = song
        return (
          <AlbumSong
            {...song}
            key={`${id}-${name}`}
            itemId={index + 1}
          />
        )
      })}
    </ol>
  )
}
