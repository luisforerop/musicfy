import { Artist } from '@models'
import Link from 'next/link';
import React, { FC } from 'react'
import { LabelCard } from '../LabelCard/index';

interface ArtistCardProps extends Artist { }

// estrallas usando el popularity

export const ArtistCard: FC<ArtistCardProps> = ({ name, image, albums, songs }) => {
  if (!image) return null

  return (
    <Link href={name.replace(/ /, '-')}>
      <a>
        <div style={{
          borderRadius: '5px',
          overflow: 'hidden',
          backgroundColor: '#ff4',
          height: 'calc(100% - 20px)',
          margin: '10px 0',
          maxWidth: '200px',
        }}>
          <div style={{
            width: '200px',
            height: '200px',
          }}>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img src={image} alt={name} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }} />
          </div>
          <h2>{name}</h2>
          <span>Álbumes: {albums}</span>
          <span>Canciones: {songs}</span>
        </div>
      </a>
    </Link>

  )
}
