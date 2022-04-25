import { FC } from '@models'
import { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { SearchButton, SearchInput, SearchList } from './components'

import styles from './SearchBar.module.css'

const {
  searchBarContainer,
  searchBarContainerOpen,
} = styles

type SearchBarProps = {
  items: { [key: string]: any }[]
  ItemContainer?: FunctionComponent | FC<any>
  listHeight?: number
  propToLookingFor?: string
}

export const SearchBar: FC<SearchBarProps> = ({
  items,
  ItemContainer = Fragment,
  listHeight = 300,
  propToLookingFor,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [itemsToRender, setItemsToRender] = useState<{ [key: string]: any }[] | null>(null)

  const escapeListener = (e: KeyboardEvent) => {
    const searchBarState = document
      .getElementById('search-bar-container')
      ?.getAttribute('search-bar-state')

    if (e.key === 'Escape' && searchBarState === 'open')
      document.getElementById('search-button')?.click()
  }

  useEffect(() => {
    if (items) setItemsToRender(items)
  }, [items])

  useEffect(() => {
    document.addEventListener('keydown', escapeListener)

    return () => {
      document.removeEventListener('keydown', escapeListener)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <div
        className={`${searchBarContainer} ${isOpen ? searchBarContainerOpen : ''}`}
        id='search-bar-container'
        {...{
          'search-bar-state': isOpen ? 'open' : 'close'
        }}
      >
        <SearchButton
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <SearchInput
          setItemsToRender={setItemsToRender}
          items={items}
          setIsOpen={setIsOpen}
          propToLookingFor={propToLookingFor ?? ''}
          isOpen={isOpen}
        />
      </div>

      <SearchList
        isOpen={isOpen}
        height={listHeight ?? 300}
        itemsToRender={itemsToRender}
        ItemContainer={ItemContainer}
      />
    </Fragment>

  )
}
