import { useMusicfyContext } from '@context';
import { useRouter } from 'next/router';
import React from 'react'

export const Album = () => {
  const { query } = useRouter()
  let { artist, album } = query as { artist: string, album: string }
  artist = artist?.replace(/-/g, ' ')
  album = album?.replace(/_/g, ' ')

  const { albums } = useMusicfyContext()
  const albumData = albums ? albums[artist] : null
  const albumInfo = albumData?.find(({ name }) => name === album)
  const {
    artist: albumArtist,
    image,
    name,
  } = albumInfo || {}
  console.log({ albumData, albums, albumInfo })


  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '30vw 70vw',
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
          backgroundColor: '#010',
          width: '16vw',
          height: '16vw',
          borderRadius: '100%',
          position: 'absolute',
          left: '12vw',
          zIndex: -1,
        }}>
        </div>
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{albumArtist}</h2>
        <button>Reproducir</button>
        <button>Guardar</button>
      </div>
    </div>
  )
}
