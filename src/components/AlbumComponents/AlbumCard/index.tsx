import { Album, FC } from '@models'
import Link from 'next/link'
import React from 'react'

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
        <div>
          <div style={{
            borderRadius: '10px',
            overflow: 'hidden',
            height: '200px',
            width: '200px',
          }} >
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img src={image} alt="" style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }} />
          </div>
          <h2>{name}</h2>
          <span>{artist}</span>
        </div>
      </a>
    </Link>
  )
}
