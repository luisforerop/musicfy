import React from 'react'

const Lines = Array.from({ length: 10 }, (_, i) => 10 + i * 2)

export const CompactDisc = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      aria-labelledby="title"
      aria-describedby="desc"
      role="img"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Compact Disc</title>
      <desc>A line styled icon from Orion Icon Library.</desc>
      <circle data-name="layer2"
        cx="32" cy="32" r="30" fill="#1c1c1c" stroke="#202020" strokeLinecap="round"
        strokeLinejoin="round" strokeWidth="2"></circle>
      <circle data-name="layer1" cx="32" cy="32" r="10" fill="#2a2c2c"
        stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
      <circle data-name="layer1" cx="32" cy="32" r="2" fill="none"
        stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
      {Lines.map((line) => (
        <circle key={line} data-name="layer1" cx="32" cy="32" r={line} fill="none"
          stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
      ))}

    </svg>
  )
}
