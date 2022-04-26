import { FC } from '@models'
import React from 'react'
import { IconProps } from '.'

export const Heart: FC<IconProps> = ({ fill, stroke, strokeWidth }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
      aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Romantic</title>
      <desc>A line styled icon from Orion Icon Library.</desc>
      <path data-name="layer2" d="M44 11c-5.2 0-10.3 3.3-12 8-1.7-4.6-6.8-8-12-8A12 12 0 0 0 8 22.9C8 34.1 16.8 44.4 32 54c15.2-9.6 24-19.9 24-31.1A12 12 0 0 0 44 11z"
        fill={fill ?? "#202020"} stroke={stroke ?? "#202020"} strokeMiterlimit="10" strokeWidth={strokeWidth ?? "2"} strokeLinejoin="round"
        strokeLinecap="round"></path>

    </svg>
  )
}
