import { Album, FC } from '@models'
import Link from 'next/link'
import React from 'react'
import styles from './AlbumCard.module.css'

const {
  container,
  imageContainer,
} = styles

export const AlbumCard: FC<Album> = ({
  name,
  image,
  artist,
}) => {
  const artistUrl = artist.replace(/ /g, '-').replace(/\//g, '-')
  const albumUrl = name.replace(/ /g, '_').replace(/\?/g, 'qst')
  const href = `/${artistUrl}/${albumUrl}`
  return (
    <Link href={href}>
      <a>
        <div className={container}>
          <div className={imageContainer} >
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img src={image} alt="" />
          </div>
          <h2>{name}</h2>
          <span>{artist}</span>
        </div>
      </a>
    </Link>
  )
}
