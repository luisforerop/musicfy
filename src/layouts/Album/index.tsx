import { CompactDisc } from '@components';
import { useMusicfyContext } from '@context';
import { useGetSongs, useManageMusicPlayer } from '@hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Album = () => {
  const { query } = useRouter()
  let { artist, album } = query as { artist: string, album: string }
  const sanitizedArtist = artist === 'AC-DC' ? 'AC/DC' : artist?.replace(/-/g, ' ')
  const sanitizedAlbum = album?.replace(/_/g, ' ').replace(/qst/g, '?')

  const { albums } = useMusicfyContext()
  const albumData = albums ? albums[sanitizedArtist] : null
  const albumInfo = albumData?.find(({ name }) => name === sanitizedAlbum)
  const {
    artist: albumArtist,
    image,
    name,
    id: albumId,
  } = albumInfo || {}

  const songs = useGetSongs({ by: 'ALBUM', artist: sanitizedArtist, albumId })
  const { playSong, addSong, newPlaylist } = useManageMusicPlayer()

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '30% 70%',
    }}>
      <div style={{
        width: '30vw',
        height: '18vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          width: '18vw',
          height: '18vw',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src={image} alt="" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }} />
        </div>
        <div style={{
          // backgroundColor: '#010',
          width: '16vw',
          height: '16vw',
          borderRadius: '100%',
          position: 'absolute',
          left: '12vw',
          zIndex: -1,
        }}>
          <CompactDisc />
        </div>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1>{name}</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Link href={`/`}>
              <a>Home</a>
            </Link>
            <Link href={`/${artist}`}>
              <a>Artista</a>
            </Link>
          </div>
        </div>
        <Link href={`/${artist}`}>
          <a>
            <h2>{albumArtist}</h2>
          </a>
        </Link>
        <button
          onClick={() => songs && newPlaylist(songs)}
        >Reproducir</button>
        <button>Guardar</button>
        <ol>
          {songs?.map((song) => {
            const { id, name } = song
            return (
              <li key={id}>
                {name}
                <button onClick={
                  () => playSong(song)
                } >
                  Reproducir
                </button>

                <button onClick={
                  () => addSong(song)
                } >
                  Añadir
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
