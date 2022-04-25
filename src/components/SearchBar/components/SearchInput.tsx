import { Dispatch, FC, SetStateAction } from 'react'
import styles from '../SearchBar.module.css'

const {
  searchInput,
} = styles

type SearchInputProps = {
  setItemsToRender: Dispatch<SetStateAction<any[] | null>>
  items: any[] | undefined
  setIsOpen: Dispatch<SetStateAction<boolean>>
  propToLookingFor: string
  isOpen: boolean
}

export const SearchInput: FC<SearchInputProps> = ({
  setItemsToRender, 
  items, 
  isOpen,
  propToLookingFor
}) => {
  return (
    <input
      className={searchInput}
      type="text"
      onChange={e => {
        const { value } = e.target
        console.log({ value, items, propToLookingFor })
        
        if (!value && items) setItemsToRender(items)
        else if (items) setItemsToRender(
          items?.filter(item => item[propToLookingFor]?.toLowerCase().includes(value.toLowerCase())
          )
        )
      }}
      onFocus={() => {
        if (!isOpen) {
          document.getElementById('search-button')?.click()
        }
      }}
      onBlur={() => {
        if (isOpen) {
          document.getElementById('search-button')?.click()
        }
      }}
    />
  )
}
