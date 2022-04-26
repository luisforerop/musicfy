import { FC } from '@models'
import React from 'react'
import { IconProps } from '.'

export const Musician: FC<IconProps> = ({ fill, stroke, strokeWidth }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
      aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Artist</title>
      <desc>A line styled icon from Orion Icon Library.</desc>
      <path data-name="layer1"
        d="M46 26c0 6.1-3.4 11.5-7 14.8V44c0 2 1 5.1 11 7a15.5 15.5 0 0 1 12 11H2a13.4 13.4 0 0 1 11-11c10-1.8 12-5 12-7v-3.2c-3.6-3.3-7-8.6-7-14.8v-9.6C18 6 25.4 2 32 2s14 4 14 14.4z"
        fill="none" stroke={stroke ?? "#202020"} strokeMiterlimit="10" strokeWidth={strokeWidth ?? "2"} strokeLinejoin="round"
        strokeLinecap="round"></path>
      <path data-name="layer1"
        d="M38.6 4.6a22.2 22.2 0 0 1-5.5-2.3A2 2 0 0 0 30 4v38h-6a10 10 0 1 0 10 10V18.1c2.2.2 6.5.7 13.7 1.9a2 2 0 0 0 2.3-2c0-9.7-6.3-11.7-11.4-13.4z"
        fill={fill ?? "#202020"}></path>
    </svg>
  )
}
