import { FC } from '@models'
import { IconProps } from '.'
import React from 'react'

export const Plus: FC<IconProps> = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
      aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Add Circle</title>
      <desc>A solid styled icon from Orion Icon Library.</desc>
      <path data-name="layer1"
        d="M32 0a32 32 0 1 0 32 32A32.001 32.001 0 0 0 32 0zm16 34H34v14a2 2 0 1 1-4 0V34H16a2 2 0 0 1 0-4h14V16a2 2 0 1 1 4 0v14h14a2 2 0 0 1 0 4z"
        fill={fill ?? "#202020"}></path>
    </svg>
  )
}
