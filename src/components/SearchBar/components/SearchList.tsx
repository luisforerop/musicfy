import { FC, FunctionComponent } from 'react'
import styles from '../SearchBar.module.css'

const {
  searchListContainer,
  searchListContainerOpen,
} = styles

type SearchListProps = {
  isOpen: boolean
  height: number
  itemsToRender: any[] | null
  ItemContainer: FunctionComponent | FC<any>
}

export const SearchList: FC<SearchListProps> = ({
  isOpen,
  height,
  itemsToRender,
  ItemContainer,
}) => {


  return (
    <ul
      className={`${searchListContainer} ${isOpen ? searchListContainerOpen : ''}`}
      style={isOpen ? { height } : undefined}
    >
      {isOpen &&
        itemsToRender?.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                document.getElementById('search-button')?.click()
                
              }}
            >
              <ItemContainer {...item} />
            </li>
          )
        })}
    </ul>
  )
}
