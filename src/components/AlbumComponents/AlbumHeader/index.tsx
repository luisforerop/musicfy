import { FC } from '@models'
import { Home, Musician } from '@components'
import Link from 'next/link'
import React from 'react'
import styles from './AlbumHeader.module.css'

const {
  container,
  linksContainer,
} = styles

type AlbumHeaderProps = {
  artist: string
  name?: string
}

export const AlbumHeader: FC<AlbumHeaderProps> = ({ artist, name }) => {
  return (
    <div className={container} >
      <h1>{name}</h1>
      <div className={linksContainer} >
        <Link href={`/`}>
          <a>
            <Home fill='var(--text-secondary-color)' />
          </a>
        </Link>
        <Link href={`/${artist}`}>
          <a>
            <Musician
              fill='var(--text-secondary-color)'
              stroke='var(--text-secondary-color)'
              strokeWidth='3'
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
