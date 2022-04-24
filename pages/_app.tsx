import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MusicfyContextProvider } from '@context'
import { MusicPlayer } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MusicfyContextProvider>
      <main style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflowY: 'scroll',
      padding: '10px',
    }}>
        <Component {...pageProps} />
        <MusicPlayer />
      </main>
    </MusicfyContextProvider>
  )
}

export default MyApp
