import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MusicfyContextProvider, MusicPlayerContextProvider } from '@context'
import { MusicPlayer } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MusicfyContextProvider>
      <MusicPlayerContextProvider>
        <main style={{
          position: 'relative',
          width: '100vw',
          height: '85vh',
          overflowY: 'scroll',
          padding: '10px',
        }}>
          <Component {...pageProps} />
        </main>
        <MusicPlayer />
      </MusicPlayerContextProvider>
    </MusicfyContextProvider>
  )
}

export default MyApp
