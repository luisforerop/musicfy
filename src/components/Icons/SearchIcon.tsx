import { FC } from '@models'
import React from 'react'
import { IconProps } from '.'

export const SearchIcon: FC<IconProps> = ({ fill, stroke, strokeWidth }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
      aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Search</title>
      <desc>A line styled icon from Orion Icon Library.</desc>
      <path
        data-name="layer2"
        fill={fill ?? "none"}
        stroke={stroke ?? "#202020"}
        strokeMiterlimit="10"
        strokeWidth={strokeWidth ?? "2"}
        d="M39.049 39.049L56 56"
        strokeLinejoin="round"
        strokeLinecap="round"></path>
      <circle data-name="layer1" cx="27" cy="27" r="17" fill={fill ?? "none"} stroke={stroke ?? "#202020"}
        strokeMiterlimit="10" strokeWidth={strokeWidth ?? "2"} strokeLinejoin="round" strokeLinecap="round"></circle>
    </svg>
  )
}
