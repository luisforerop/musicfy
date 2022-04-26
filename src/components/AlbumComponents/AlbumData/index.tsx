import { AlbumSongs, Play } from '@components'
import { useManageMusicPlayer } from '@hooks'
import { FC, Song } from '@models'
import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from './AlbumData.module.css'

const {
  albumArtistTitle,
  quantitySongsContainer,
  controlsContainer,
  play,
  saveList,
} = styles

type AlbumDataProps = {
  artist: string
  albumArtist: string | undefined
  songs: Song[] | null
}

export const AlbumData: FC<AlbumDataProps> = ({
  artist,
  albumArtist,
  songs,
}) => {
  const { newPlaylist } = useManageMusicPlayer()

  return (
    <Fragment>
      <Link href={`/${artist}`}>
        <a className={albumArtistTitle} >
          <h2>{albumArtist}</h2>
        </a>
      </Link>
      <div className={controlsContainer}>
        <button
          onClick={() => songs && newPlaylist(songs)}
          className={play}
        >
          <Play fill='var(--text-secondary-color)' />
        </button>
        <button className={saveList} >Guardar</button>
      </div>
      <span className={quantitySongsContainer} >
        {songs?.length} CANCIONES
      </span>
      <AlbumSongs songs={songs} />
    </Fragment>
  )
}
