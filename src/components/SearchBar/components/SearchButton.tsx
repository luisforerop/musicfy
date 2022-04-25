import { SearchIcon } from '@components'
import type { Dispatch, FC, SetStateAction } from 'react'

import styles from '../SearchBar.module.css'

const {
  searchButtonContainer,
} = styles

type SearchButtonProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

export const SearchButton: FC<SearchButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={searchButtonContainer}>
      <button
        style={{
          background: 'none',
          width: '35px',
          height: '35px',
          padding: '0',
          border: 'none',
          outline: 'none',
        }}
        id='search-button'
        onClick={() => setIsOpen(!isOpen)}
      >
        <SearchIcon stroke='white' strokeWidth='4' />
      </button>
    </div>
  )
}
