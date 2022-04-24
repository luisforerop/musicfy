import { Artist, FC } from '@models'
import React from 'react'
import Rating from '@mui/material/Rating'

export const ArtistInfo: FC<Artist> = ({ name, albums, image, popularity, songs, genres }) => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '250px',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        borderRadius: '100%',
        overflow: 'hidden',
        margin: '10px',
        height: '150px',
        minWidth: '150px',
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
        <Rating name="read-only" value={Number(popularity)/20} readOnly precision={0.1} />
        <div></div>
        <button>Reproducir Artista</button>
        <div></div>
        <span>Álbumes: {albums}</span>
        <div></div>
        <span>Canciones: {songs}</span>
        <div></div>
        <span>Géneros: {genres.join(', ')}</span>
      </div>
    </div>
  )
}
