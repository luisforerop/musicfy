import { AlbumData, AlbumHeader, AlbumImage } from '@components'
import { useMusicfyContext } from '@context'
import { useGetSongs } from '@hooks'
import { useRouter } from 'next/router'

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

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '30% 70%',
    }}>
      <AlbumImage image={image ?? ''} />
      <div>
        <AlbumHeader
          artist={artist}
          name={name}
        />
        <AlbumData
          albumArtist={albumArtist}
          artist={artist}
          songs={songs}
        />
      </div>
    </div>
  )
}
