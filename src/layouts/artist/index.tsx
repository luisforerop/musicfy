import { AlbumCard, ArtistInfo } from '@components'
import { useMusicfyContext } from '@context'
import { useRouter } from 'next/router'
import styles from './Artist.module.css'

const {
  albumsContainer,
  albumContainer,
} = styles


export const Artist = () => {
  const { query } = useRouter()
  const artistQuery = query.artist as string
  let artist = artistQuery?.replace(/-/g, ' ')
  artist = artist === 'AC DC' ? 'AC/DC' : artist

  const { artists, albums } = useMusicfyContext()
  const artistData = artists?.find(({ name }) => name === artist)

  const artistAlbums = albums ? albums[artist] : []

  if (!artistData) return null

  return (
    <div style={{
      padding: '0 200px',
    }}>
      <ArtistInfo  {...artistData} />
      <ul className={albumsContainer} >
        {artistAlbums?.map((album) => (
          <li key={album.id} className={albumContainer} >
            <AlbumCard {...album} />
          </li>
        ))}
      </ul>
    </div>
  )
}
