import { Artist, FC } from '@models'
import React from 'react'
import Rating from '@mui/material/Rating'

export const ArtistInfo: FC<Artist> = ({ name, albums, image, popularity, songs }) => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        borderRadius: '100%',
        overflow: 'hidden',
        margin: '10px',
        height: '150px',
        width: '150px',
      }}>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={image} alt="" style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }} />
      </div>
      <div>
        <h1>{name}</h1>
        <span>Álbumes: {albums}</span>
        <span>Canciones: {songs}</span>
        <Rating name="read-only" value={Number(popularity)/20} readOnly precision={0.1} />
      </div>
    </div>
  )
}
