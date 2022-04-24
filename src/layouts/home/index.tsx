import { ArtistCard, Carousel, Section } from '@components';
import { useMusicfyContext } from '@context';
import { useState, useEffect } from 'react';
import type { Artist } from '@models';

export const Home = () => {
  const { artists } = useMusicfyContext()
  const [artistsToRender, setArtistsToRender] = useState<Artist[]>([])

  useEffect(() => {
    console.log({ artists })

    if (artists) {
      setArtistsToRender(artists)
    }
  }, [artists])

  // Al hacer clic en agregar a favoritos se debe abrir una modal
  // canción, artista y tiempo


  return (
    <div >
      <header>
        <h1>MUSICFY</h1>
        search
      </header>
      <Section
        title='Tus favoritos'
        Container={ArtistCard}
        itemsList={artistsToRender}
      />
      <Section
        title='Artistas'
        Container={ArtistCard}
        itemsList={artistsToRender}
      />
      <Section
        title='Tus listas de reproducción'
        Container={ArtistCard}
        itemsList={artistsToRender}
      />
    </div>
  )
}
