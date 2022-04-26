import { IArtist } from '@models'
import Rating from '@mui/material/Rating'
import Link from 'next/link'
import { FC } from 'react'
import styles from './ArtistCard.module.css'

// estrallas usando el popularity

const {
  cardContainer,
  imageContainer,
  ratingContainer,
} = styles

export const ArtistCard: FC<IArtist> = ({ name, image, albums, songs, popularity }) => {
  if (!image) return null

  return (
    <Link href={name.replace(/ /g, '-').replace(/\//, '-')}>
      <a>
        <div className={cardContainer}>
          <div className={imageContainer}>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img src={image} alt={name} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }} />
          </div>
          <h2>{name}</h2>
          <div className={ratingContainer}>
            <Rating
              name="read-only"
              value={Number(popularity) / 20}
              readOnly
              precision={0.1}
              size='small'
            />
          </div>
          <span>Álbumes: {albums}</span>
          <span>Canciones: {songs}</span>
        </div>
      </a>
    </Link>

  )
}
