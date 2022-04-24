import type { PropsWithChildren, ReactElement, ValidationMap, WeakValidationMap } from "react"

export interface ApiArtist {
  id: number
  name: string
  image: string
  genres: string[]
  popularity: string
  spotify_url: string
  spotify_id: string
  created_at: Date
  updated_at: Date
}

export type ApiArtists = ApiArtist[]

export interface Artist extends ApiArtist {
  songs: number
  albums: number
}

export interface ApiAlbum {
  id: number
  name: string
  image: string
  spotify_url: string
  total_tracks: number
}

export type ApiAlbums = {
  artist: number
  albums: ApiAlbum[]
}[]

export interface Album extends ApiAlbum {
  artist: string
}

export interface ApiSong {
  id: number
  name: string
  spotify_url: string
  preview_url: string
  duration_ms: string
  explicit: string
}

export type ApiSongs = {
  album: number
  songs: ApiSong[]
}[]

export interface FC<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P> | undefined;
  contextTypes?: ValidationMap<any> | undefined;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}

export interface Song extends ApiSong {
  artist?: string
  album?: string
}
