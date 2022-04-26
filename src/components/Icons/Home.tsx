import { FC } from '@models'
import React from 'react'
import { IconProps } from '.'

export const Home: FC<IconProps> = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
      aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>House</title>
      <desc>A solid styled icon from Orion Icon Library.</desc>
      <path data-name="layer1"
        d="M56 25l7.917 7.576c.175.169-.674.424-.917.424h-7v29a1 1 0 0 1-1 1H42a1 1 0 0 1-1-1V45a1 1 0 0 0-1-1H24a1 1 0 0 0-1 1v17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V33H1a.548.548 0 0 1-.381-.942L32 1.723l14.039 13.571-.026-4.281a2 2 0 0 1 2-2.012H54a2 2 0 0 1 2 2z"
        fill={fill ?? "#202020"}></path>
    </svg>
  )
}
