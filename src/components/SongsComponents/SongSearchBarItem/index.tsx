import { FC, Song } from '@models'

export const SongSearchBarItem: FC<Song> = ({ name }) => {

  return (
    <div>
      {name}
    </div>
  )
}
