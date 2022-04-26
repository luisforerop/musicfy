import { Home, SearchBar, SongSearchBarItem } from '@components'
import { useGetSongs, useManageMusicPlayer } from '@hooks'
import { IArtist, FC } from '@models'
import Rating from '@mui/material/Rating'
import Link from 'next/link'
import styles from './ArtistInfo.module.css'
import { useState, useEffect } from 'react';

const {
  container,
  imageContainer,
  headerContainer,
  playButton,
  infoContainer,
  iconsContainer,
} = styles

export const ArtistInfo: FC<IArtist> = ({ name, albums, image, popularity, songs, genres }) => {
  const [formatGenres, setFormatGenres] = useState('')

  const songsData = useGetSongs({
    by: 'ARTIST',
    artist: name,
  })

  const { newPlaylist } = useManageMusicPlayer()

  useEffect(() => {
    const _formatGenres = genres.join(', ') // new Intl.ListFormat('es').format(genres)
    setFormatGenres(_formatGenres)
  }, [genres])

  return (
    <div className={container} >
      <div className={imageContainer} >
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={image} alt="" />
      </div>
      <div>
        <div className={headerContainer} >
          <h1>{name}</h1>
          <div className={iconsContainer} >
            <SearchBar
              items={songsData ?? []}
              ItemContainer={SongSearchBarItem}
              propToLookingFor={'name'}
            />
            <Link href={`/`}>
              <a><Home fill='var(--text-primary-color)' /> </a>
            </Link>
          </div>
        </div>
        <Rating
          name="read-only"
          value={Number(popularity) / 20}
          readOnly
          precision={0.1}
        />
        <button
          onClick={() => songsData && newPlaylist(songsData)}
          className={playButton}
        >
          Reproducir Artista
        </button>
        <div className={infoContainer}>
          <span>Álbumes: {albums}</span>
          <span>Canciones: {songs}</span>
          <span>
            Géneros: {formatGenres.replace(/_/g, ' ')}
          </span>
        </div>
      </div>
    </div>
  )
}
