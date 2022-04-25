import { useGetSongs, useManageMusicPlayer } from '@hooks';
import { Artist, FC } from '@models';
import Rating from '@mui/material/Rating';
import Link from 'next/link';

export const ArtistInfo: FC<Artist> = ({ name, albums, image, popularity, songs, genres }) => {
  const songsData = useGetSongs({
    by: 'ARTIST',
    artist: name,
  })

  const { newPlaylist } = useManageMusicPlayer()


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
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <h1>{name}</h1>
          <div>
            <Link href={`/`}>
              <a>Home</a>
            </Link>
            <div>Buscador</div>
          </div>
        </div>
        <Rating name="read-only" value={Number(popularity) / 20} readOnly precision={0.1} />
        <div></div>
        <button
          onClick={() => songsData && newPlaylist(songsData)}
        >Reproducir Artista</button>
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
