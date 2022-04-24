import { useRouter } from 'next/router'
import { useMusicfyContext } from '@context'
import React from 'react'
import { AlbumCard, ArtistInfo } from '@components'

export const Artist = () => {
  const { query } = useRouter()
  const artistQuery = query.artist as string
  let artist = artistQuery?.replace(/-/g, ' ')
  artist = artist === 'AC DC' ? 'AC/DC' : artist

  const { artists, albums } = useMusicfyContext()
  const artistData = artists?.find(({ name }) => name === artist)
  const { image, name, songs, albums: albumsQuantity } = artistData ?? {}

  const artistAlbums = albums ? albums[artist] : []
  console.log({ artistAlbums, albums, artist })


  if (!artistData) return null

  return (
    <div style={{
      padding: '0 200px',
    }}>
      <ArtistInfo  {...artistData} />
      <ul style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridColumnGap: '10px',
        gridRowGap: '20px',
        width: '100%',
        margin: '0',
        padding: '10px',
        justifyContent: 'center',
      }}>
        {artistAlbums?.map((album) => (
          <li key={album.id} style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
          }} >
            <AlbumCard {...album} />
          </li>
        ))}
      </ul>
    </div>
  )
}
