import { FC } from '@models'
import React from 'react'
import { IconProps } from '.'

export const Next: FC<IconProps> = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
      aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Next</title>
      <desc>A solid styled icon from Orion Icon Library.</desc>
      <path data-name="layer1"
        d="M32 2a30 30 0 1 0 30 30A30 30 0 0 0 32 2zm16 40a2 2 0 1 1-4 0V32L28 42.9v-6.8l-10 6.8V21.1l10 6.8v-6.8l16 10.8V22a2 2 0 1 1 4 0z"
        fill={fill ?? "#202020"}></path>
    </svg>
  )
}
