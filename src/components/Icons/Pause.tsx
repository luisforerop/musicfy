import { FC } from '@models'
import React from 'react'
import { IconProps } from '.'

export const Pause: FC<IconProps> = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
      aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Pause</title>
      <desc>A solid styled icon from Orion Icon Library.</desc>
      <path data-name="layer1"
        d="M32 2a30 30 0 1 0 30 30A30 30 0 0 0 32 2zm-4 42a2 2 0 0 1-4 0V20a2 2 0 0 1 4 0zm12 0a2 2 0 0 1-4 0V20a2 2 0 0 1 4 0z"
        fill={fill ?? "#202020"}></path>
    </svg>
  )
}
